const mongoose = require('mongoose');

const transaksiSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  makanan: [
    {
      makananId: { type: mongoose.Schema.Types.ObjectId, ref: 'Makanan' },
      jumlah: Number
    }
  ],
  totalHarga: Number,
  tanggal: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaksi', transaksiSchema);