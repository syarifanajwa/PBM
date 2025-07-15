const mongoose = require('mongoose');

const makananSchema = new mongoose.Schema({
  nama: String,
  harga: Number,
  deskripsi: String,
  dibuatOleh: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Makanan', makananSchema);
