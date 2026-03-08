# ⭐ Stella – AI Emotional Support Companion

Stella is a **voice-based AI emotional support assistant** that allows users to have natural conversations using voice.

The application listens to user speech, processes it using AI, and responds with a friendly synthesized voice.

The goal of this project is to explore how AI can act as a **supportive conversational companion** for users who want someone to talk to.

---

# 🌐 Live Demo

Frontend deployed on Vercel:

🔗 https://stella-frontend-psi.vercel.app/

⚠️ **Note:**  
The backend server is currently **offline**, so AI responses may not work.

---

# 🧠 Project Architecture
            User
             │
             │ Voice Input
             ▼
    ┌─────────────────────┐
    │   Frontend (React)  │
    │   Stella UI Orb     │
    └─────────────────────┘
             │
             │ API Request
             ▼
    ┌─────────────────────┐
    │   Backend (Node.js) │
    │   AI Processing     │
    └─────────────────────┘
             │
             │ AI Response
             ▼
    ┌─────────────────────┐
    │   Text-to-Speech    │
    │   Voice Generation  │
    └─────────────────────┘
             │
             ▼
       User hears response
       
       
---

# ✨ Features

- 🎙️ Voice-based conversation
- 🤖 AI generated responses
- 🔊 Text-to-speech voice replies
- 🌌 Animated Stella Orb interface
- 💬 Emotional support focused interaction
- ⚡ Fast and responsive UI

---

# 🛠 Tech Stack

### Frontend
- React
- Vite
- TailwindCSS
- Web Speech API

### Backend
- Node.js
- Express
- AI API (LLM)
- ElevenLabs Text-to-Speech

### Deployment
- Vercel (Frontend)

---




# 🚀 Running Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/stella-ai.git
cd stella-ai

2️⃣ Run Frontend
cd frontend
npm install
npm run dev

3️⃣ Run Backend
cd backend
npm install
node server.js











### ⚠️ Backend Status

The backend server is currently **offline**, so the AI assistant cannot generate responses at the moment.

What still works:
- The frontend UI loads normally
- Voice recognition can capture user input
- The Stella interface and orb animation work

What does **not** work currently:
- AI response generation
- Text-to-speech voice replies from the backend

This project was designed with a backend API that processes user input and returns AI-generated responses. When the backend server is deployed or started locally, full functionality will be restored.

---

# 🔧 Backend Setup (Optional)

To run the backend locally:

cd backend
npm install
node server.js



# 🔮 Future Improvements

Planned improvements for the Stella AI companion:

-   Persistent conversation memory
    
-   Emotion detection from voice/text
    
-   Improved voice synthesis
    
-   Chat history support
    
-   Mobile optimization
    
-   Fully deployed backend infrastructure
    
-   Real-time streaming responses
    

-----------

# ❤️ Purpose of Stella

Stella is designed to be a friendly AI companion that listens and responds to users in a conversational way.

The project explores how voice-based AI systems can provide basic emotional support and interactive conversation experiences.
