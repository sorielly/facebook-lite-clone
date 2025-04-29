const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/users.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
