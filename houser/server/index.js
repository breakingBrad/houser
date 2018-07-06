const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use(cors);

app.get('/', (req, res) => {
  res.send('I live to Serve.');
})

const port = 4001;
app.listen(port, () => { console.log(`Server listening at localhost:${port}`); });