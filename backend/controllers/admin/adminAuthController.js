const Admin = require("../../models/Admin");

// Register Admin
exports.registerAdmin = async (req, res) => {
  try {
    let { email, password, confirmPassword } = req.body;
    
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const admin = await Admin.create(req.body);
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: "Error registering admin" });
  }
};

// Login Admin
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (admin && admin.password === password) {
      res.json({ message: "Login Successful", admin });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Login Error" });
  }
};