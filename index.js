// import our MongoStoreProvider
const MongoStoreProvider = require("./MongoStoreProvider");

// entry point to our Express server-side application
const express = require("express");
const app = express();
const PORT = 3000;

// because this application is built with Create-React-App, our production application actually resides
// in the "build" directory
app.use(express.static("./build"));

// define our constants for MongoDB
const MONGO_URL = "mongodb://localhost:27017";
const MONGO_OPTIONS = { useUnifiedTopology: true };

// create a new instance of our MongoStoreProvider
const dal = new MongoStoreProvider(MONGO_URL, MONGO_OPTIONS);
// open connection
dal.open();

// define our API routes

// API route to create a new account
app.get("/account/create/:name/:email/:password", (req, res) => {
  const { name, email, password } = req.params;
  dal.createAccount(name, email, password).then((result) => {
    res.send(result);
  },
  (err) => {
    res.status(500).send(err);
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
  // ask our data layer for all accounts
  dal.getAllAccounts().then((result) => {
    res.send(result);
  },
  (err) => {
    res.status(500).send(err);
  });
})

// listen on PORT, and echo to server console
app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});

// register a callback to close the data store provider before exit
process.on("exit", () => dal.close());