import React, { useEffect, useState } from "react";

export default function StellaOrb({ listening, speaking }) {

  const [scale, setScale] = useState(1);

  useEffect(() => {

    let interval;

    if (speaking) {
      interval = setInterval(() => {
        setScale(1 + Math.random() * 0.15);
      }, 120);
    } else {
      setScale(1);
    }

    return () => clearInterval(interval);

  }, [speaking]);

  let stateClass = "";

  if (speaking) {
    stateClass = "animate-spin-slow";
  } else if (listening) {
    stateClass = "animate-pulse";
  } else {
    stateClass = "animate-breathe";
  }

  return (
    <div className="flex items-center justify-center">

      <div
        className={`relative w-40 h-40 rounded-full transition-all duration-200 ${stateClass}`}
        style={{
          transform: `scale(${scale})`,
          background:
            "radial-gradient(circle at 30% 30%, #b9e3ff, #4aa3ff, #0059ff)"
        }}
      >

        {/* Glow */}
        <div className="absolute inset-0 rounded-full blur-3xl opacity-80 bg-blue-500"></div>

      </div>

    </div>
  );
}