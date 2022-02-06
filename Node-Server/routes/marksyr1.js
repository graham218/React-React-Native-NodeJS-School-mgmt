const marks_yr1 = require("../models/marks_yr1");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newmarks_yr1 = new marks_yr1(req.body);

  try {
    const savedmarks_yr1 = await newmarks_yr1.save();
    res.status(200).json(savedmarks_yr1);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedmarks_yr1 = await marks_yr1.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedmarks_yr1);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await marks_yr1.findByIdAndDelete(req.params.id);
    res.status(200).json("This Marks have been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET units
router.get("/find/:id", async (req, res) => {
  try {
    const marks = await marks_yr1.findById(req.params.id);
    res.status(200).json(marks);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL units
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const marks = await marks_yr1.find();
      res.status(200).json(marks);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
