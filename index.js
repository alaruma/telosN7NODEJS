const express = require('express');
const app = express();

const movieRoutes = require('./routes/movieRoutes');

app.use(express.json());
app.use(movieRoutes);


app.get('/', (req, res) => {
  res.send('API de filmes funcionando 🎬');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});