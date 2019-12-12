const Commerces = require("../models/Commerce")
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const commerces = await Commerces.create(req.body);
    await User.updateOne({ _id: comercio.user }, { $push: { commerce: commerce._id } })
    return res.json(commerces);
  },
  async list(req, res) {
    const commerces = await Commerces.find({});
    return res.json(commerces);
  },
  async index(req, res) {
    const commerceId = req.params.id;
    const commerces = await Commerces.findOne({ _id: commerceId }).populate("user");
    return res.json(commerces);
  },
  async update(req, res) {
    const commerces = await Commerces.findByIdAndUpdate(req.params.id, req.body, { new: true }
    );
    return res.json(commerces);
  },
  async destroy(req, res) {
    await Commerces.deleteOne({ _id: req.params.id });
    return res.json({ message: "Exclusão realizada com sucesso!" });
  }
}
