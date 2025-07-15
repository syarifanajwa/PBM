const bcrypt = require('bcryptjs');

bcrypt.hash('najwa123', 10).then(hash => {
  console.log('Hash:', hash);
});
