const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");


const db = require("./models");



db.sequelize.sync({ force: true }).then(() => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  });
  