const Users = require("../models/User")

module.exports = {
  async store(req, res) {

    const { email, senha } = req.body;

    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado." });
    }
    if (!(await user.compareHash(senha))) {
      return res.status(400).json({ error: "Senha Inválida." });
    }
    return res.json({ user, token: Users.generateToken(user) });
  }
}