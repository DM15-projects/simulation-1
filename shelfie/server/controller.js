module.exports = {
  getProducts: (req, res) => {
    let db = req.app.get("db");
    db.get_products().then(products => {
      //   console.log(products);
      return res.status(200).send(products);
    });
  }
};
