import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: String,
  postId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId
}, { timestamps: true });

export default mongoose.model("Comment", commentSchema);