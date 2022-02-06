const FeePayment = require("../models/FeePayment");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newFeePayment = new FeePayment(req.body);

  try {
    const savedFeePayment = await newFeePayment.save();
    res.status(200).json(savedFeePayment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedFeePayment = await Faculty.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFeePayment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await FeePayment.findByIdAndDelete(req.params.id);
    res.status(200).json("This FeePayment has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET FeePayment
router.get("/find/:id", async (req, res) => {
  try {
    const feePayment = await FeePayment.findById(req.params.id);
    res.status(200).json(feePayment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Fee Payments
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const feePayment = await FeePayment.find();
      res.status(200).json(feePayment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
