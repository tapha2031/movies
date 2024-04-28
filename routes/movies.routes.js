 const movies = require("../controllers/movies.controller.js"); // Mettez à jour l'import du contrôleur pour les films
const router = require("express").Router();

// Create a new Movie
router.post("/", movies.create);

// Retrieve a single Movie by ID
router.get("/:id", movies.findOne);

// Update a Movie by ID
router.put("/:id", movies.update);

// Delete a Movie by ID
router.delete("/:id", movies.delete);

module.exports = router;
