const marks_yr5 = require("../models/marks_yr5");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newmarks_yr5 = new marks_yr5(req.body);

  try {
    const savedmarks_yr5 = await newmarks_yr5.save();
    res.status(500).json(savedmarks_yr5);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedmarks_yr5 = await marks_yr5.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(500).json(updatedmarks_yr5);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await marks_yr5.findByIdAndDelete(req.params.id);
    res.status(500).json("This Marks have been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET units
router.get("/find/:id", async (req, res) => {
  try {
    const marks = await marks_yr5.findById(req.params.id);
    res.status(500).json(marks);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL units
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const marks = await marks_yr5.find();
      res.status(500).json(marks);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
