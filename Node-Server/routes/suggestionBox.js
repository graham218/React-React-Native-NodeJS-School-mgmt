const SuggestionBox = require("../models/SuggestionBox");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newSuggestionBox = new SuggestionBox(req.body);

  try {
    const suggestion = await newSuggestionBox.save();
    res.status(200).json(suggestion);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedSuggestionBox = await SuggestionBox.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSuggestionBox);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await SuggestionBox.findByIdAndDelete(req.params.id);
    res.status(200).json("This Suggestion has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET stage
router.get("/find/:id", async (req, res) => {
  try {
    const suggestionBox = await SuggestionBox.findById(req.params.id);
    res.status(200).json(suggestionBox);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL suggestions
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const suggestions = await SuggestionBox.find();
      res.status(200).json(suggestions);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
