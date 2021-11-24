// entry point to our Express server-side application
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});