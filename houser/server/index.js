const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');
const massive = require('massive');

require('dotenv').config({
  path: __dirname + '/../.env',
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.DB_CONNECTION_STRING)
  .then(dbInstance => {
    console.log('DB Connected')
    app.set('db', dbInstance);
  })
  .catch(err => {
    console.warn(err);
  });

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.addHouse)
app.delete('/api/houses/:id', controller.deleteHouse)



app.get('/', (req, res) => {
  res.send('I live to Serve.');
})

const port = 4001;
app.listen(port, () => { console.log(`Server listening at localhost:${port}`); });