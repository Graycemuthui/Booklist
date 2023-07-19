const products = [];

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  // need to parse the body
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  res.redirect("/");
};

exports.getAddProduct = (req, res, next) => {
  // join is a method of the path module that concatenates the paths
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formCss: true,
    productCss: true,
    activeAddProduct: true,
  });
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCss: true,
  });
};
