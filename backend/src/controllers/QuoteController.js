const Quote = require("../models/MonthlyQuote")
const User = require("../models/User");
const Commerce = require("../models/Commerce");

module.exports = {
  async store(req, res) {
    const quote = await Quote.create(req.body);
    return res.json(quote);
  },
  async list(req, res) {
    const quote = await Quote.find({}).populate("user comercio");
    return res.json(quote);
  },
  async index(req, res) {
    const quote = await Quote.findOne({ mes: req.params.mes })
    if (!quote) {
      return res.status(400).json({ error: "Comércio não encontrado!" });
  }
    return res.json(quote);
  },
  async update(req, res) {
    const quote = await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true }
    );
    return res.json(quote);
  },

  async destroy(req, res) {
    await Quote.deleteOne({ _id: req.params.id });
    return res.json(await Quote.find({}).populate("user comercio"));
  }
}