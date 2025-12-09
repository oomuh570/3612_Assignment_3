const express = require("express");
const app = express();

// Load the data files
const artists = require("./data/artists.json");
const galleries = require("./data/galleries.json");
const paintings = require("./data/paintings-nested.json");

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("COMP 3612 Assignment 3 API is running.");
});

// -------------------------------
// ARTISTS API
// -------------------------------

// Return all artists
app.get("/api/artists", (req, res) => {
  res.json(artists);
});

// Return artists by country (case-insensitive)
app.get("/api/artists/:country", (req, res) => {
  const country = req.params.country.toLowerCase();

  const result = artists.filter(
    (a) => a.Nationality && a.Nationality.toLowerCase() === country
  );

  if (result.length === 0) {
    return res.json({ message: "No data found for your request." });
  }

  res.json(result);
});

// -------------------------------
// GALLERIES API
// -------------------------------

// Return all galleries
app.get("/api/galleries", (req, res) => {
  res.json(galleries);
});

// Return galleries by country (case-insensitive)
app.get("/api/galleries/:country", (req, res) => {
  const country = req.params.country.toLowerCase();

  const result = galleries.filter(
    (g) => g.GalleryCountry && g.GalleryCountry.toLowerCase() === country
  );

  if (result.length === 0) {
    return res.json({ message: "No data found for your request." });
  }

  res.json(result);
});

// -------------------------------
// PAINTINGS API
// -------------------------------

// All paintings
app.get("/api/paintings-nested", (req, res) => {
  res.json(paintings);
});

// Painting by ID
app.get("/api/paintings-nested/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const painting = paintings.find((p) => p.paintingID === id);

  if (!painting) {
    return res.json({ message: "No data found for your request." });
  }

  res.json(painting);
});

// Paintings by gallery ID
app.get("/api/paintings-nested/gallery/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const result = paintings.filter((p) => p.gallery.galleryID === id);

  if (result.length === 0) {
    return res.json({ message: "No data found for your request." });
  }

  res.json(result);
});

// Paintings by artist ID
app.get("/api/paintings-nested/artist/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const result = paintings.filter((p) => p.artist.artistID === id);

  if (result.length === 0) {
    return res.json({ message: "No data found for your request." });
  }

  res.json(result);
});

// Paintings by year range
app.get("/api/paintings-nested/year/:min/:max", (req, res) => {
  const min = parseInt(req.params.min);
  const max = parseInt(req.params.max);

  const result = paintings.filter(
    (p) => p.yearOfWork >= min && p.yearOfWork <= max
  );

  if (result.length === 0) {
    return res.json({ message: "No data found for your request." });
  }

  res.json(result);
});

// Paintings by title search (case-insensitive)
app.get("/api/paintings-nested/title/:text", (req, res) => {
  const text = req.params.text.toLowerCase();

  const result = paintings.filter(
    (p) => p.title && p.title.toLowerCase().includes(text)
  );

  if (result.length === 0) {
    return res.json({ message: "No data found for your request." });
  }

  res.json(result);
});

// Color route
app.get("/api/paintings-nested/color/:name", (req, res) => {
  console.log("🎨 COLOR ROUTE HIT! Param:", req.params.name);
  const name = req.params.name.toLowerCase();

  const result = paintings.filter(
    (p) =>
      p.details &&
      p.details.annotation &&
      p.details.annotation.dominantColors &&
      p.details.annotation.dominantColors.some(
        (c) => c.name && c.name.toLowerCase() === name
      )
  );

  console.log("🎨 Found:", result.length, "paintings");

  if (result.length === 0) {
    return res.json({ message: "No data found for your request." });
  }

  res.json(result);
});

// ID route
app.get("/api/paintings-nested/:id", (req, res) => {
  console.log("🔢 ID ROUTE HIT! Param:", req.params.id);
  const id = parseInt(req.params.id);

  const painting = paintings.find((p) => p.paintingID === id);

  if (!painting) {
    return res.json({ message: "No data found for your request." });
  }

  res.json(painting);
});

// START SERVER
app.listen(process.env.PORT || 8080, () => {
  console.log("Server running on port 8080");
});
