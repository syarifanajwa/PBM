const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // ✅ route yang penting
app.use('/api/menu', menuRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
