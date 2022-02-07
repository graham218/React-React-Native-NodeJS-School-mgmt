const Students = require("../models/Students");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newStudent = new Students(req.body);

  try {
    const savedStudent = await newStudent.save();
    res.status(200).json(savedStudent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Students.findByIdAndDelete(req.params.id);
    res.status(200).json("This Student has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET STUDENT
router.get("/find/:id", async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL STUDENTS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const students = await Students.find();
      res.status(200).json(students);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
