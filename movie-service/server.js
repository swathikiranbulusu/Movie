const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/movies', (req, res) => {
  console.log('📥 POST /api/movies hit');
  res.json({ message: 'It worked!' });
});

const PORT = 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
