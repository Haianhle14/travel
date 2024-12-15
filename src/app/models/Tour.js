const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tour = new Schema(
    {
      name: { type: String, required: true },
      descripsion: { type: String },
      address: { type: String },
      price: { type: String },
      image: { type: String },
    },
    {
      timestamps: true,
    },
  );


module.exports = mongoose.model('Tour', Tour);