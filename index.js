const express = require("express");

const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.redirect('/home')
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'html/contact.html'));
});

app.listen(5000, () => {
  console.log("http://localhost:5000.");
});

// Export the Express API
module.exports = app;