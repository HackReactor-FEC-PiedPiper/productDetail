var express = require("express");
var app = express();
const bodyParser = app.use(express.json());

app.use(express.static(__dirname + "/client/public"));

app.listen(3000, () => {
  console.log("listening on port 3000");
});
