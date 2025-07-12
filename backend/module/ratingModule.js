const mongoose = require('mongoose');

const ratingModule = new mongoose.Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  rating: {
    type: Number, // ✅ Capital "N"
  },
  reviewer: {
    name: {
      type: String,
    },
    location: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },
  },
});

const rating = mongoose.model("Rating", ratingModule);
module.exports = rating;     
