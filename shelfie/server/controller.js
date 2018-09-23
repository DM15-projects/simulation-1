module.exports = {
  getProducts: (req, res) => {
    let db = req.app.get("db");
    db.get_inventory().then(products => {
      //   console.log(products);
      return res.status(200).send(products);
    });
  },

  addProduct: (req, res) => {
    // console.log(req.body);
    let db = req.app.get("db");
    let { name, price, image_url } = req.body;

    db.create_product([name, price, image_url]).then(() => res.sendStatus(200));
  },

  deleteProduct: (req, res) => {
    // console.log(req.body);
    let db = req.app.get("db");
    db.delete_product([req.params.id]).then(() => res.sendStatus(200));
  }
};
