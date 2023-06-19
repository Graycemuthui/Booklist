//  core modules
// http - launch a server, send requests
//  https - launch a secure server(SSL)
//  fs - work with the file system
//  path - work with file and directory paths
// os - work with the operating system

const express = require("express");
const bodyParser = require("body-parser");

// express is a function
const app = express();
app.use(bodyParser.urlencoded());

app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  // need to parse the body
  console.log(req.body);
  res.redirect("/");
});

// use is a middleware function
app.use("/", (req, res, next) => {
  console.log("In the middleware");
  // send allows us to send a response
  res.send("<h1>Hello from Express!</h1>");
});

// the server takes the request and response objects
// event loop - these events keep on running as long as there are event listeners registered
// CreateServer is an event listener
// const server = http.createServer(app);

app.listen(3000);
