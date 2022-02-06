const LecturerUnits = require("../models/LecturerUnits");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newLecturerUnits = new LecturerUnits(req.body);

  try {
    const savedLecturerUnits = await newLecturerUnits.save();
    res.status(200).json(savedLecturerUnits);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedLecturerUnits = await LecturerUnits.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedLecturerUnits);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await LecturerUnits.findByIdAndDelete(req.params.id);
    res.status(200).json("This Unit has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET units
router.get("/find/:id", async (req, res) => {
  try {
    const units = await LecturerUnits.findById(req.params.id);
    res.status(200).json(units);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL units
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const lecturerUnits = await LecturerUnits.find();
      res.status(200).json(lecturerUnits);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
