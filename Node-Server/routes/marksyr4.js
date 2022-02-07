const marks_yr4 = require("../models/marks_yr4");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newmarks_yr4 = new marks_yr4(req.body);

  try {
    const savedmarks_yr4 = await newmarks_yr4.save();
    res.status(400).json(savedmarks_yr4);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedmarks_yr4 = await marks_yr4.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(400).json(updatedmarks_yr4);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await marks_yr4.findByIdAndDelete(req.params.id);
    res.status(400).json("This Marks have been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET units
router.get("/find/:id", async (req, res) => {
  try {
    const marks = await marks_yr4.findById(req.params.id);
    res.status(400).json(marks);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL units
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const marks = await marks_yr4.find();
      res.status(400).json(marks);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
