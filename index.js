const express = require("express");
const app = express();

app.get("/without-cors", (req, res, next) => {
  res.json({ msg: "😞 no CORS, no party!" });
});

const server = app.listen(3000, () => {
  console.log("Listening on port %s", server.address().port);
});
