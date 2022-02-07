const NoticeBoard = require("../models/NoticeBoard");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newNoticeBoard = new NoticeBoard(req.body);

  try {
    const noticeBoard = await newNoticeBoard.save();
    res.status(200).json(noticeBoard);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedNoticeBoard = await NoticeBoard.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedNoticeBoard);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await NoticeBoard.findByIdAndDelete(req.params.id);
    res.status(200).json("This Notice has been deleted from the database...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET notice
router.get("/find/:id", async (req, res) => {
  try {
    const notice = await NoticeBoard.findById(req.params.id);
    res.status(200).json(notice);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL notices
router.get("/", verifyTokenAndAuthorization, async (req, res) => {
    try {
      const notice = await NoticeBoard.find();
      res.status(200).json(notice);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
