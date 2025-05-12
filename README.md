
# Emotion Explorer – Reflexion Lite (Backend)

This is the **backend API** for the Emotion Explorer project. It handles NLP-based emotion classification, GPT-based story generation, and cognitive insight analysis.

---

## Features

- Emotion detection using Hugging Face models (Transformers)
- GPT story generation via OpenAI API
- Cognitive pattern tagging (concern, avoidance, distortion)
- RESTful API to serve frontend requests
- Designed for local or lightweight production deployment

---

## Getting Started

```bash
git clone https://github.com/yourname/emotion-explorer-backend.git
cd emotion-explorer-backend
npm install
node index.js
```
Set your .env file for API keys:
```
OPENAI_API_KEY=your-key-here
PORT=3001
```
---

## Tech Stack

- **Node.js** + **Express**
- **OpenAI API** – GPT-based story generation
- **Hugging Face Transformers** – Emotion classification
- **dotenv** – Environment variable management

---

## API Endpoints

| Method | Endpoint      | Description                              |
|--------|---------------|------------------------------------------|
| POST   | `/classify`   | Returns multi-emotion classification scores from user input |
| POST   | `/story`      | Generates an emotionally relevant story based on detected mood |
| POST   | `/analyze`    | (Optional) Performs cognitive insight analysis on user input |

---

## Project Status

- MVP Complete
- Actively evolving as part of the broader Reflexion Platform

---

## License

MIT License
