const { v4: uuidv4 } = require("uuid");

// To GET only ids
exports.getIds = (req, res) => {
  return res.status(200).json({ id: uuidv4() });
};
