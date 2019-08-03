var express = require("express");
var cors = require("cors");
var app = express();
const PORT = process.env.PORT || 5000;

var allowedOrigins = ["http://localhost:8055"];
app.use(
  cors({
    origin: function(origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);

app.options("*", cors()); // enable pre-flight request

app.get("/foo", function(req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("*", function(req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(PORT, function() {
  console.log("CORS-enabled web server listening on port " + PORT);
});
