const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Tour = new Schema(
    {
      name: { type: String, required: true },
      descripsion: { type: String },
      address: { type: String },
      price: { type: String },
      image: { type: String },
      slug: { type: String, slug: 'name', unique: true },
    },
    {
      timestamps: true,
    },
  );

//Add plugin
Tour.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all'
 });
mongoose.plugin(slug);

module.exports = mongoose.model('Tour', Tour);