// entry point to our Express server-side application
const express = require("express");
const app = express();
const PORT = 3000;

// because this application is built with Create-React-App, our production application actually resides
// in the "build" directory
app.use(express.static("./build"));

// define our API routes

// API route to create a new account
app.get("/account/create/:name/:email/:password", (req, res) => {
  // for now, just echo back the received data
  res.send({
    name: req.params.name,
    email: req.params.email,
    password: req.params.password
  });
});

// API route to log in a user
app.get("/account/login/:email/:password", (req, res) => {
  // echo back for testing
  res.send({
    email: req.params.email,
    password: req.params.password
  });
});

// API route to retrieve all accounts
app.get("/account/all", (req, res) => {
  // just send a placeholder message
  res.send("This route will retrieve information for all accounts");
})

// listen on PORT, and echo to server console
app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});