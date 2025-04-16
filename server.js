// backend/server.js
import express from 'express';
import cors from 'cors';
import { pipeline } from '@xenova/transformers';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
console.log("🚨 OPENAI API KEY:", process.env.OPENAI_API_KEY?.slice(0, 8) + "...");
app.use(cors());
app.use(express.json());

let classifier;

app.post('/api/emotion', async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
  }

  try {
    // Lazy-load model
    if (!classifier) {
      classifier = await pipeline(
        'text-classification',
        'Xenova/bert-base-multilingual-uncased-sentiment'
      );
    }

    const result = await classifier(text);
    const label = result[0].label.toLowerCase(); // e.g., '1 star', '5 stars'
    const score = result[0].score;

    let emotion = 'neutral';
    if (label.includes('1') || label.includes('2')) emotion = 'sad';
    else if (label.includes('4') || label.includes('5')) emotion = 'happy';

    return res.json({ emotion, rawLabel: label, confidence: score.toFixed(4) });
  } catch (err) {
    console.error('Emotion classification failed:', err);
    return res.status(500).json({ error: 'Emotion analysis failed' });
  }
});

// 🧠 加入 story router
import storyRouter from './api/story.js';
app.use('/api', storyRouter);

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});