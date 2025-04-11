const path = require("path");


app.use(express.static(__dirname));

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const movies = [
  { id: 1, title: "Stranger Things", genre: "Horror", thumbnail: "https://i.imgur.com/UePbdph.jpg" },
  { id: 2, title: "Money Heist", genre: "Thriller", thumbnail: "https://i.imgur.com/RU2Ydpb.jpg" },
  { id: 3, title: "The Crown", genre: "Drama", thumbnail: "https://i.imgur.com/nVg7Y4F.jpg" }
];


app.get("/", (req, res) => {
  res.send("🎬 Welcome to MovieStream API!");
});

app.get("/api/movies", (req, res) => {
  res.json(movies);
});


app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send("Movie not found");
  res.json(movie);
});


app.post("/api/movies", (req, res) => {
  const { title, genre, thumbnail } = req.body;
  const newMovie = {
    id: movies.length + 1,
    title,
    genre,
    thumbnail
  };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`🎬 MovieStream backend running at http://localhost:${port}`);
});
