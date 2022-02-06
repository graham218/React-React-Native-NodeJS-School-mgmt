const Voting = require("../models/Voting");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newVoting = new Voting(req.body);

  try {
    const voting = await newVoting.save();
    res.status(200).json(voting);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedVoting = await Voting.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedVoting);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Voting.findByIdAndDelete(req.params.id);
    res.status(200).json("This Politician has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET politician
router.get("/find/:id", async (req, res) => {
  try {
    const voting = await Voting.findById(req.params.id);
    res.status(200).json(voting);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL politicians
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const voting = await Voting.find();
      res.status(200).json(voting);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
