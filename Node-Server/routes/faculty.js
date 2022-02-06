const Faculty = require("../models/Faculty");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newFaculty = new Faculty(req.body);

  try {
    const savedFaculty = await newFaculty.save();
    res.status(200).json(savedFaculty);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedFaculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFaculty);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.status(200).json("This Faculty has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Faculty
router.get("/find/:id", async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    res.status(200).json(faculty);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Faculties
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const faculty = await Faculty.find();
      res.status(200).json(faculty);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
