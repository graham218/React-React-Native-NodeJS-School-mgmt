const FeeReceipt = require("../models/FeeReceipt");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newFeeReceipt = new FeeReceipt(req.body);

  try {
    const savedFeeReceipt = await newFeeReceiptt.save();
    res.status(200).json(savedFeeReceipt);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedFeeReceipt = await FeeReceipt.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFeeReceipt);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await FeeReceipt.findByIdAndDelete(req.params.id);
    res.status(200).json("This Fee Receipt has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Fee Receipts
router.get("/find/:id", async (req, res) => {
  try {
    const feeReceipt = await FeeReceipt.findById(req.params.id);
    res.status(200).json(feeReceipt);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Fee Receipts
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const feeReceipt = await FeeReceipt.find();
      res.status(200).json(feeReceipt);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
