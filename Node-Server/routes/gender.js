const Gender = require("../models/Gender");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newGender = new Gender(req.body);

  try {
    const savedGender = await newGender.save();
    res.status(200).json(savedGender);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedGender = await Gender.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedGender);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Gender.findByIdAndDelete(req.params.id);
    res.status(200).json("This Gender has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Fee Receipts
router.get("/find/:id", async (req, res) => {
  try {
    const gender = await Gender.findById(req.params.id);
    res.status(200).json(gender);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Gender
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const gender = await Gender.find();
      res.status(200).json(gender);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
