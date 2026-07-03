const adminCredentials = require("../data/admin");

exports.login = (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === adminCredentials.email && password === adminCredentials.password) {
      return res.status(200).json({
        success: true,
        token: "admin-token",
        user: {
          email: adminCredentials.email,
          role: adminCredentials.role
        }
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid credentials"
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message
    });
  }
};
