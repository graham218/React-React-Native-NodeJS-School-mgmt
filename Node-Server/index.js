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
const specialExamRoute = require("./routes/specialExam");
const stagesRoute = require("./routes/stages");
const studentsRoute = require("./routes/students");
const suggestionBoxRoute = require("./routes/suggestionBox");
const unitsRoute = require("./routes/units");
const votingRoute = require("./routes/voting");


app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/faculty", facultyRoute);
app.use("/api/v1/feePayment", feePaymentRoute);
app.use("/api/v1/feeReceipt", feeReceiptRoute);
app.use("/api/v1/gender", genderRoute);
app.use("/api/v1/lecturer", lecRoute);
app.use("/api/v1/lecUnits", lecUnitsRoute);
app.use("/api/v1/marksyr1", marksyr1Route);
app.use("/api/v1/notice", noticeRoute);
app.use("/api/v1/programmes", programmesRoute);
app.use("/api/v1/specialExam", specialExamRoute);
app.use("/api/v1/stages", stagesRoute);
app.use("/api/v1/students", studentsRoute);
app.use("/api/v1/suggestionBox", suggestionBoxRoute);
app.use("/api/v1/units", unitsRoute);
app.use("/api/v1/voting", votingRoute);



db.sequelize.sync({ /*force: true*/ }).then(() => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  });
  