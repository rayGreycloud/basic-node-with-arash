var express = require('express');

var app = express();

function checkCredentials(req, res, next) {
  if (req.params.name === "ok") {
    next();
  } else {
    res.json("Access denied.")
  }
};

app.get('/profile/:name', checkCredentials, function(req, res, next) {
    res.json("This is your profile page!");
});

app.get('/', function(req, res, next) {
  res.json("Home Page");
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running on port 3000");
  }
});
