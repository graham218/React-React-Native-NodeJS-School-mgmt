const Units = require("../models/Units");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newUnits = new Units(req.body);

  try {
    const units = await newUnits.save();
    res.status(200).json(units);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedUnits = await Units.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUnits);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Units.findByIdAndDelete(req.params.id);
    res.status(200).json("This Unit has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET stage
router.get("/find/:id", async (req, res) => {
  try {
    const unit = await Units.findById(req.params.id);
    res.status(200).json(unit);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL units
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const units = await Units.find();
      res.status(200).json(units);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
