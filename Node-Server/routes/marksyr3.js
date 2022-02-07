const marks_yr3 = require("../models/marks_yr3");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newmarks_yr3 = new marks_yr3(req.body);

  try {
    const savedmarks_yr3 = await newmarks_yr3.save();
    res.status(300).json(savedmarks_yr3);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedmarks_yr3 = await marks_yr3.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(300).json(updatedmarks_yr3);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await marks_yr3.findByIdAndDelete(req.params.id);
    res.status(300).json("This Marks have been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET units
router.get("/find/:id", async (req, res) => {
  try {
    const marks = await marks_yr3.findById(req.params.id);
    res.status(300).json(marks);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL units
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const marks = await marks_yr3.find();
      res.status(300).json(marks);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
