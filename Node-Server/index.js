const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const db = require("./models");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const adminRoute = require("./routes/admin");
const facultyRoute = require("./routes/faculty");
const feePaymentRoute = require("./routes/feePayment");
const feeReceiptRoute = require("./routes/feeReceipt");
const genderRoute = require("./routes/gender");
const lecRoute = require("./routes/lecturers");
const lecUnitsRoute = require("./routes/lecturerUnits");
const marksyr1Route = require("./routes/marksyr1");
const noticeRoute = require("./routes/noticeBoard");
const programmesRoute = require("./routes/programmes");






db.sequelize.sync({ /*force: true*/ }).then(() => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  });
  