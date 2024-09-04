const express = require('express');
const app = express();
const port = 3000;

app.get('/world', (req, res) => {
  res.send('World');
});

app.listen(port, () => {
  console.log(`World Service is listening at http://localhost:${port}`);
});
