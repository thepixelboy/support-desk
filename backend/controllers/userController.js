const registerUser = (req, res) => {
  res.status(200).json({ message: "Register Route" });
};

const loginUser = (req, res) => {
  res.status(200).json({ message: "Login Route" });
};

module.exports = {
  registerUser,
  loginUser,
};
