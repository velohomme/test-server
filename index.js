var express = require("express");
var cors = require("cors");
var app = express();
const PORT = process.env.PORT || 5000;

// this origin property causes the response to NOT use a wildcard for
// Access-Control-Allow-Origin.  Rather it will return the host of the
// page which invoked the request, e.g., Access-Control-Allow-Origin: http://localhost:8055
app.use(
  cors({
    credentials: true,
    origin: function(origin, callback) {
      return callback(null, true);
    }
  })
);

app.options("*", cors()); // enable pre-flight request

app.get("/foo", function(req, res, next) {
  res.json({ msg: "Message Received...you rock!" });
});

app.get("*", function(req, res, next) {
  res.json({ msg: "Message Received...you rock!" });
});

app.listen(PORT, function() {
  console.log("CORS-enabled web server listening on port " + PORT);
});
