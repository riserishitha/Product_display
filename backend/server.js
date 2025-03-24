const express = require('express');
const dotenv=require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config();
const PORT=process.env.PORT;
const DATABASE_URL=process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL)
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err))

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello! Server is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});