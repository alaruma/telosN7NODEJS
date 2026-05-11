const express = require('express');
const connectDB = require('./config/database');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const PORT = 3000; 

connectDB();

app.use(express.json());

app.use('/movies', movieRoutes);

app.get('/', (req, res) => {
  res.send('API de filmes funcionando tá on ');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});