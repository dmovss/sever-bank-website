const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API routes
app.get('/api/cards', (req, res) => {
  res.json([
    { id: 1, name: "Premium Card", benefits: ["3% cashback", "No annual fee"] },
    { id: 2, name: "Gold Card", benefits: ["Travel insurance", "Airport lounge access"] }
  ]);
});

// Form submission endpoint
app.post('/api/contact', (req, res) => {
  console.log('Form submission:', req.body);
  res.status(200).json({ message: 'Form received' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});