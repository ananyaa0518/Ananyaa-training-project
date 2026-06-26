const Blog = require("../models/Blog");

// CREATE
exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.json(blogs);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET SINGLE
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE
exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      message: "Blog deleted",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
