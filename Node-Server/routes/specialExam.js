const SpecialExam = require("../models/SpecialExam");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newSpecialExam = new SpecialExam(req.body);

  try {
    const specialExam = await newSpecialExam.save();
    res.status(200).json(specialExam);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedSpecialExam = await SpecialExam.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSpecialExam);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await SpecialExam.findByIdAndDelete(req.params.id);
    res.status(200).json("This Special Exam has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET special exam
router.get("/find/:id", async (req, res) => {
  try {
    const specialExam = await SpecialExam.findById(req.params.id);
    res.status(200).json(specialExam);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL special exams
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const specialExam = await SpecialExam.find();
      res.status(200).json(specialExam);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
