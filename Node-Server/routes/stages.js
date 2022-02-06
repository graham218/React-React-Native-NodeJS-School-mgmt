const Stages = require("../models/Stages");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newStages = new Stages(req.body);

  try {
    const stages = await newStages.save();
    res.status(200).json(stages);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedStages = await Stages.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStages);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Stages.findByIdAndDelete(req.params.id);
    res.status(200).json("This Stage has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET stage
router.get("/find/:id", async (req, res) => {
  try {
    const stage = await Stages.findById(req.params.id);
    res.status(200).json(stage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL stages
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const stage = await Stages.find();
      res.status(200).json(stage);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
