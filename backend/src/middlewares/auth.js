const jwt = require("jsonwebtoken");

const { promisify } = require("util");

const authConfig = require('../config/auth');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Validação expirou." })
  }
  const [, token] = authHeader.split(" ");
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    console.log(decoded);
    req.userId = decoded.id;
    return next();
  }
  catch (err) {
    return res.status(401).json({ error: "Autorização negada." })
  }
}