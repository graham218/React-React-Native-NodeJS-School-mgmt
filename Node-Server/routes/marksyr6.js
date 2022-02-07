const marks_yr6 = require("../models/marks_yr6");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newmarks_yr6 = new marks_yr6(req.body);

  try {
    const savedmarks_yr6 = await newmarks_yr6.save();
    res.status(600).json(savedmarks_yr6);
  } catch (err) {
    res.status(600).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedmarks_yr6 = await marks_yr6.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(600).json(updatedmarks_yr6);
  } catch (err) {
    res.status(600).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await marks_yr6.findByIdAndDelete(req.params.id);
    res.status(600).json("This Marks have been deleted from the database...");
  } catch (err) {
    res.status(600).json(err);
  }
});

//GET units
router.get("/find/:id", async (req, res) => {
  try {
    const marks = await marks_yr6.findById(req.params.id);
    res.status(600).json(marks);
  } catch (err) {
    res.status(600).json(err);
  }
});

//GET ALL units
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const marks = await marks_yr6.find();
      res.status(600).json(marks);
    } catch (err) {
      res.status(600).json(err);
    }
  });

module.exports = router;
