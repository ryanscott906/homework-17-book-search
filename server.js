const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb+srv://Test:myRootPassword1@cluster0-oxdl0.mongodb.net/googlebooks?retryWrites=true"
, {useNewUrlParser: true})
.then(() => console.log("connected to db"))
.catch(error => { console.log("caught", error.message); });


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
