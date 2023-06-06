const fs = require("fs");

const requestHandler = (req, res) => {
  // req is an object that contains information about the incoming request
  // res is an object that contains information about the outgoing response
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    // return is used to exit the function execution
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    // on is an event listener
    // data is an event
    // chunk is a buffer
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    // end is an event
    // this event is fired when the incoming request is done parsing
    return req.on("end", () => {
      // Buffer is a global object
      // Buffer is a construct that allows you to hold multiple chunks of data and work with them
      const parsedBody = Buffer.concat(body).toString();
      // split the string into an array of strings
      const message = parsedBody.split("=")[1];
      // writeFileSync(Asycnchronous) blocks code execution until the file is created
      fs.writeFileSync("message.txt", message, (err) => {
        // writeFileSync blocks code execution until the file is created
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};

// global object that is available everywhere
module.exports = requestHandler;
