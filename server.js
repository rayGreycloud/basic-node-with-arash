var express = require('express');

var app = express();

app.use(function(req, res, next) {
    if (2 < 1) {
      next();
    } else {
      res.json("Permission denied.")
    }
});

app.get('/', function(req, res, next) {
    res.json("Home Page");
});

app.get('/catfish', function(req, res, next) {
  res.json("Catfish");
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running on port 3000");
  }
});
