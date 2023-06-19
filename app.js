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
// call the body parser function

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded());

app.use(adminRoutes);
app.use(shopRoutes);

// the server takes the request and response objects
// event loop - these events keep on running as long as there are event listeners registered
// CreateServer is an event listener
// const server = http.createServer(app);

app.listen(3000);
