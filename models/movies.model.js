module.exports = mongoose => {
  const schema = mongoose.Schema(
    {
      title: String,   // Changed field name from "name" to "title"
      genre: String,   // Added field for genre
      synopsis: String,// Added field for synopsis
      registered: Boolean,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  // Adjust the model name to "Movie" and use the "movies" collection
  const Movie = mongoose.model("Movie", schema);
  return Movie;
};
