const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const champions = require("./routes/api/champions");
const axios = require("axios");

const app = express();

// Body parser middlewareD
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
app.use("/api/champions", champions);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  keepAwake();
  console.log(`Server running on port ${port}`);
});

function keepAwake() {
  setInterval(function() {
    axios.get("https://champions-bsit.herokuapp.com");
  }, 60000); // every 1min
}
