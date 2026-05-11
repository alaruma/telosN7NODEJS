const Movie = require("../models/Movie");




exports.createMovie = async (req, res) => {
  try {
    // Validação básica (não precisamos mais pedir o 'id' aqui)
    const { title, description, year } = req.body;
    
    if (!title || !description || !year) {
      return res.status(400).json({ message: "Dados incompletos" });
    }

    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Filme não encontrado" });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!updatedMovie) {
      return res.status(404).json({ message: "Filme não encontrado" });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedMovie = await Movie.findByIdAndDelete(id);
    
    if (!deletedMovie) {
      return res.status(404).json({ message: "Filme não encontrado" });
    }
    
    res.status(200).json({ message: "Filme deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};