module.exports = {
  getHouses: (req, res, next) => {
    const dbInstance = req.app.get('db');
    console.log('Fetching Houses');
    dbInstance.get_houses()
      .then(houses =>
        res.status(200).json(houses)
      )
      .catch(err => {
        res.status(500).send({ error: "Oops! Something went wrong." });
        console.log(err)
      });
  },
  addHouse: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, address, city, state, zip } = req.body;
    console.log(name, address, city, state, zip);
    dbInstance.insert_house([name, address, city, state, zip])
      .then(houses => res.status(201).json(houses))
      .catch(err => {
        res.status(500).send({ error: "Oops! Something went wrong." });
        console.log(err)
      });
  },
  deleteHouse: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    console.log(`Removing House Id: ${params.id}`)
    dbInstance.delete_house(params.id)
      .then(houses => res.status(204).json(houses))
      .catch(err => {
        res.status(500).send({ error: "Oops! Something went wrong." });
        console.log(err)
      });
  },
}