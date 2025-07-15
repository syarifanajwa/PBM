// controllers/menuController.js
const db = require('../config/database');

// GET semua menu
exports.getAllMenu = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM menu');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data menu' });
  }
};

// CREATE menu
exports.createMenu = async (req, res) => {
  const { nama, deskripsi, harga, stok } = req.body;

  try {
    await db.query(
      'INSERT INTO menu (nama, deskripsi, harga, stok) VALUES (?, ?, ?, ?)',
      [nama, deskripsi, harga, stok]
    );
    res.json({ message: 'Menu berhasil ditambahkan' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal menambahkan menu' });
  }
};

// UPDATE menu
exports.updateMenu = async (req, res) => {
  const { id } = req.params;
  const { nama, deskripsi, harga, stok } = req.body;

  try {
    await db.query(
      'UPDATE menu SET nama = ?, deskripsi = ?, harga = ?, stok = ? WHERE id = ?',
      [nama, deskripsi, harga, stok, id]
    );
    res.json({ message: 'Menu berhasil diupdate' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengupdate menu' });
  }
};

// DELETE menu
exports.deleteMenu = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query('DELETE FROM menu WHERE id = ?', [id]);
    res.json({ message: 'Menu berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal menghapus menu' });
  }
};
