const express = require("express");


const app = express();
const PORT = process.env.PORT ||3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes");


app.listen(PORT, function() {
  console.log(`App is now running on http://localhost:${PORT}`);
});