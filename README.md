⭐ Stella – AI Emotional Support Companion

Stella is a voice-based AI emotional support assistant designed to talk with users in a natural, friendly way.
It listens to the user’s voice, processes the message using AI, and responds with a human-like voice.

The goal of this project is to create a simple emotional support companion that users can talk to when they feel lonely, stressed, or need someone to listen.

🌐 Live Demo

Frontend is deployed on Vercel:

https://stella-frontend-psi.vercel.app/

⚠️ Backend server is currently offline, so the assistant may not respond.

🧠 Project Architecture
                User
                 │
                 │ Voice Input
                 ▼
        ┌───────────────────┐
        │   Frontend (React) │
        │   Stella UI Orb    │
        └───────────────────┘
                 │
                 │ API Request
                 ▼
        ┌───────────────────┐
        │   Backend (Node)  │
        │   AI Processing   │
        └───────────────────┘
                 │
                 │ AI Response
                 ▼
        ┌───────────────────┐
        │ Text-to-Speech    │
        │ Voice Generation  │
        └───────────────────┘
                 │
                 ▼
              User hears response
🖥️ Frontend

Frontend handles:

Voice recognition

User interface

Sending messages to backend

Playing AI voice responses

Stella animated orb

Tech Used

React

Vite

TailwindCSS

Web Speech API

Vercel (deployment)

Frontend URL:

https://stella-frontend-psi.vercel.app/

⚙️ Backend

The backend handles:

AI response generation

Conversation processing

Text-to-speech API calls

Sending responses back to frontend

Tech Used

Node.js

Express

OpenAI / AI API

ElevenLabs (voice generation)

⚠️ Backend Status

Currently the backend server is offline, so:

Voice input works

UI loads correctly

But AI responses will not work

To fully run Stella, the backend server must be started locally or deployed.

🧩 Features

🎙️ Voice input conversation

🤖 AI generated replies

🔊 Voice responses

🌌 Animated Stella Orb interface

💬 Emotional support focused conversation

⚡ Fast React UI

📂 Project Structure
stella/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── StellaOrb.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── routes
│   └── package.json
│
└── README.md
🚀 Running Locally
1️⃣ Clone the Repository
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
🔮 Future Improvements

Memory based conversations

Emotion detection

Better voice synthesis

Chat history

Mobile optimization

Fully deployed backend

❤️ Purpose of Stella

Stella is designed as a friendly AI companion that listens and talks with users.
The project explores how AI can provide basic emotional support through natural conversation.
