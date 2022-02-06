const Programmes = require("../models/Programmes");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProgrammes = new Programmes(req.body);

  try {
    const programmes = await newProgrammes.save();
    res.status(200).json(programmes);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProgrammes = await Programmes.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProgrammes);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Programmes.findByIdAndDelete(req.params.id);
    res.status(200).json("This Programme has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET programme
router.get("/find/:id", async (req, res) => {
  try {
    const programme = await Programmes.findById(req.params.id);
    res.status(200).json(programme);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL programmes
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const programmes = await Programmes.find();
      res.status(200).json(programmes);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
