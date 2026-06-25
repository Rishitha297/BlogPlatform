import Comment from "../models/Comment.js";

// ADD COMMENT
export const addComment = async (req, res) => {
  try {
    console.log("COMMENT BODY:", req.body);

    const { text, postId, userId } = req.body;

    const comment = new Comment({
      text,
      postId,
      userId
    });

    await comment.save();

    res.json(comment);
  } catch (err) {
    console.log("COMMENT ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET COMMENTS
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });

    res.json(comments);
  } catch (err) {
    console.log("GET COMMENT ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};