const db = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// LOGIN
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    if (users.length === 0) {
      return res.status(404).json({ message: 'User tidak ditemukan' });
    }

    const valid = await bcrypt.compare(password, users[0].password);
    if (!valid) {
      return res.status(401).json({ message: 'Password salah' });
    }

    const token = jwt.sign({ id: users[0].id }, 'rahasianajwa', { expiresIn: '1d' });

    res.json({
      message: 'Login berhasil',
      token,
      user: {
        id: users[0].id,
        username: users[0].username,
        email: users[0].email
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Gagal login', error: err.message });
  }
};
