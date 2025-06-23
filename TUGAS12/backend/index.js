const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tokoku', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemRoutes = require('./routes/items');
app.use('/items', itemRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
