const blogs = require("../data/blogs");

exports.getBlogs = (req, res) => {
  try {
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ 
      message: "Error retrieving blogs", 
      error: err.message 
    });
  }
};

exports.getBlog = (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = blogs.find((item) => item._id === blogId);

    if (!blog) {
      return res.status(404).json({ message: `Blog with ID ${blogId} not found` });
    }

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ 
      message: "Error retrieving the blog", 
      error: err.message 
    });
  }
};

exports.createBlog = (req, res) => {
  try {
    const { title, content, image, author } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required fields." });
    }

    const newBlog = {
      _id: Date.now().toString(),
      title: title,
      content: content,
      image: image || "",
      author: author || "Anonymous",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    blogs.push(newBlog);

    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ 
      message: "Error creating the blog", 
      error: err.message 
    });
  }
};

exports.updateBlog = (req, res) => {
  try {
    const blogId = req.params.id;
    const { title, content, image, author } = req.body;

    const blogIndex = blogs.findIndex((item) => item._id === blogId);

    if (blogIndex === -1) {
      return res.status(404).json({ message: `Blog with ID ${blogId} not found` });
    }

    const existingBlog = blogs[blogIndex];

    const updatedBlog = {
      ...existingBlog,
      title: title !== undefined ? title : existingBlog.title,
      content: content !== undefined ? content : existingBlog.content,
      image: image !== undefined ? image : existingBlog.image,
      author: author !== undefined ? author : existingBlog.author,
      updatedAt: new Date().toISOString()
    };

    blogs[blogIndex] = updatedBlog;

    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ 
      message: "Error updating the blog", 
      error: err.message 
    });
  }
};

exports.deleteBlog = (req, res) => {
  try {
    const blogId = req.params.id;
    const blogIndex = blogs.findIndex((item) => item._id === blogId);

    if (blogIndex === -1) {
      return res.status(404).json({ message: `Blog with ID ${blogId} not found` });
    }

    blogs.splice(blogIndex, 1);

    res.status(200).json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ 
      message: "Error deleting the blog", 
      error: err.message 
    });
  }
};
