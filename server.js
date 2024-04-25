const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/SecondPage', (req, res) => {
  const filePath = path.join(__dirname, 'звукозапись.json');
  res.download(filePath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});