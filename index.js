const express = require("express");
const app = express();

app.get("/*", function (req, res) {
  res.json({
    message: "Thank you for requesting my server.",
  });
});

app.listen(4000, function () {
  console.log("I'm alive at port:4000");
});
