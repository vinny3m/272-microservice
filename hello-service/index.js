const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello');//prints hello in browser
});

app.listen(port, () => {
  console.log(`Hello Service listening at http://localhost:${port}`);
});
