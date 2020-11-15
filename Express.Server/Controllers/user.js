const User = require("../Models/user");

//  To GET all user details
exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res
        .status(400)
        .json({ success: false, data: "unable to get user" });
    }

    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.log(err);
  }
};

// Create/POST new user
exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, data: "unable to create new user" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.log(err);
  }
};
