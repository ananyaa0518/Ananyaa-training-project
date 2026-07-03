const express = require("express");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Blog Module API Backend!" });
});

module.exports = app;
