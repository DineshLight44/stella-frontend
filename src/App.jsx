import { useState, useRef } from "react";
import StellaOrb from "./components/StellaOrb";

function App() {
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const recognitionRef = useRef(null);
  const currentAudioRef = useRef(null);
  const silenceTimerRef = useRef(null);
  const audioContextRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const vadAnimationFrameRef = useRef(null);

  const stopVAD = () => {
    if (vadAnimationFrameRef.current) {
      cancelAnimationFrame(vadAnimationFrameRef.current);
      vadAnimationFrameRef.current = null;
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
  };

  const speak = async (text, emotion = "neutral") => {
    try {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current = null;
      }

      setSpeaking(true);

      const response = await fetch("http://127.0.0.1:8000/tts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text, emotion })
      });

      const blob = await response.blob();

      const audio = new Audio(URL.createObjectURL(blob));
      currentAudioRef.current = audio;

      audio.onended = () => {
        setSpeaking(false);
        currentAudioRef.current = null;
      
        // restart listening automatically
        startListening();
      };

      audio.play();

    } catch (error) {
      console.error(error);
      setSpeaking(false);
    }
  };

  const sendMessage = async (message) => {
    if (!message) return;

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: message })
      });

      const data = await response.json();

      speak(data.reply, data.emotion);

    } catch (error) {
      console.error(error);
    }
  };

  const startListening = async () => {

    if (recognitionRef.current) {
      recognitionRef.current.onstart = null;
      recognitionRef.current.onresult = null;
      recognitionRef.current.onend = null;
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    stopVAD();

    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current = null;
      setSpeaking(false);
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      sendMessage(transcript);
    };

    recognition.onend = () => {
      setListening(false);
      recognitionRef.current = null;
      stopVAD();
    };

    recognition.start();
    recognitionRef.current = recognition;

    // -------- Voice Activity Detection --------

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaStreamRef.current = stream;

    const audioContext = new AudioContext();
    audioContextRef.current = audioContext;
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);

    microphone.connect(analyser);

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function detectSilence() {

      analyser.getByteFrequencyData(dataArray);

      const volume =
        dataArray.reduce((a, b) => a + b) / dataArray.length;

      if (volume < 25) {

        if (!silenceTimerRef.current) {

          silenceTimerRef.current = setTimeout(() => {

            if (recognitionRef.current) {
              recognitionRef.current.stop();
            }

            silenceTimerRef.current = null;
            stopVAD();

          }, 2000);

        }

      } else {

        if (silenceTimerRef.current) {
          clearTimeout(silenceTimerRef.current);
          silenceTimerRef.current = null;
        }

      }

      vadAnimationFrameRef.current = requestAnimationFrame(detectSilence);
    }

    detectSilence();
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* UI Layer */}
      <div className="relative flex flex-col items-center justify-center h-full text-white">

        {/* Header */}
        <div className="absolute top-16 w-full text-center text-white">

          <h1 className="text-4xl font-medium tracking-[0.4em] text-white/90 drop-shadow-lg">
            STELLA
          </h1>

          <p className="text-sm font-medium tracking-[0.3em] text-white/70 mt-3">
            VOICE AI COMPANION
          </p>

        </div>

        {/* Orb Button */}
        <div
          className="cursor-pointer"
          onClick={startListening}
        >
          <StellaOrb listening={listening} speaking={speaking} />
        </div>

      </div>

    </div>
  );
}

export default App;