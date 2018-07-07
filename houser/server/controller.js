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
}