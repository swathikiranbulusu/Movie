const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
connectDB();

app.use(express.json());
app.get('/', (req, res) => res.send('Movie Service is running'));
app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Movie Service running on port ${PORT}`));
