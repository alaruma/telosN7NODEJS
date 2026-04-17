let movies = [];


exports.createMovie = (req, res) => {
  const { id, title, description, year } = req.body;

  if (!id || !title || !description || !year) {
    return res.status(400).json({ message: "Dados incompletos" });
  }

  const movie = req.body;
  movies.push(movie);

  res.json(movie);
};

exports.getMovies = (req, res) => {
  res.json(movies);
};


exports.updateMovie = (req, res) => {
  const id = parseInt(req.params.id);
  const index = movies.findIndex(m => m.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Filme não encontrado" });
  }

  movies[index] = req.body;
  res.json(movies[index]);
};


exports.deleteMovie = (req, res) => {
  const id = parseInt(req.params.id);
  movies = movies.filter(m => m.id !== id);

  res.json({ message: "Filme deletado com sucesso" });
};