const Admin = require("../models/Admin");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newAdmin = new Admin(req.body);

  try {
    const savedAdmin = await newAdmin.save();
    res.status(200).json(savedAdmin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedAdmin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json("This Admin has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Lecturer
router.get("/find/:id", async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Lecturers
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const admin = await Admin.find();
      res.status(200).json(admin);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
