const Users = require("../models/User")

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    if (await Users.findOne({ email })) {
      return res.status(400).json({ error: "Usuário já existente" })
    }
    const user = await Users.create(req.body);
    return res.json(user);
  },
  async list(req, res) {
    const user = await Users.find({});
    return res.json(user);
  },
  async index(req, res) {
    const user = await Users.findOne({ email: req.params.email }).populate([
      "commerce",
      "monthlyquote"
    ]);
    if (user) {
      return res.json(user);
    }
    return res.status(400).json({ error: "Usuário não encontrado" });
  },
  async update(req, res) {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true }
    );
    return res.json(user);
  },
  async destroy(req, res) {
    await Users.deleteOne({ _id: req.params.id });
    return res.json({ Ok: true });
  }
}