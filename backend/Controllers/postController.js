import Post from "../models/Post.js";

// CREATE POST
export const createPost = async (req, res) => {
  try {
    console.log("POST BODY:", req.body);

    const { title, content, author } = req.body;

    const post = new Post({
      title,
      content,
      author
    });

    await post.save();

    res.json(post);

  } catch (err) {
    console.log("CREATE POST ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET POSTS
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.log("GET POSTS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE POST
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(post);

  } catch (err) {
    console.log("UPDATE POST ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE POST
export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.json({
      message: "Post deleted successfully"
    });

  } catch (err) {
    console.log("DELETE POST ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};