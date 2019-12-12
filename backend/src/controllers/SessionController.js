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
    const { _id, nome, isAdmin } = user;
    return res.json({ user: { _id, nome, isAdmin }, token: Users.generateToken(user) });
  }
}