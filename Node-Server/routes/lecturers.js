const Lecturers = require("../models/Lecturers");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newLecturer = new Lecturers(req.body);

  try {
    const savedLecturer = await newLecturer.save();
    res.status(200).json(savedLecturer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedLecturer = await Lecturers.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedLecturer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Lecturers.findByIdAndDelete(req.params.id);
    res.status(200).json("This Lecturer has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Lecturer
router.get("/find/:id", async (req, res) => {
  try {
    const lecturer = await Lecturers.findById(req.params.id);
    res.status(200).json(lecturer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Lecturers
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const lecturers = await Lecturers.find();
      res.status(200).json(lecturers);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
