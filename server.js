var express = require("express");
var app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(express.static("client/public"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
