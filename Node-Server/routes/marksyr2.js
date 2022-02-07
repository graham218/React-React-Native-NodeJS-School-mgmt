const marks_yr2 = require("../models/marks_yr2");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newmarks_yr2 = new marks_yr2(req.body);

  try {
    const savedmarks_yr2 = await newmarks_yr2.save();
    res.status(200).json(savedmarks_yr2);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedmarks_yr2 = await marks_yr2.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedmarks_yr2);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await marks_yr2.findByIdAndDelete(req.params.id);
    res.status(200).json("This Marks have been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET units
router.get("/find/:id", async (req, res) => {
  try {
    const marks = await marks_yr2.findById(req.params.id);
    res.status(200).json(marks);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL units
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const marks = await marks_yr2.find();
      res.status(200).json(marks);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
