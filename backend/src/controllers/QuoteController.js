const Quote = require("../models/MonthlyQuote")
const User = require("../models/User");
const Commerce = require("../models/Commerce");

module.exports = {
  async store(req, res) {
    const quote = await Quote.create(req.body);
    await User.updateOne({ _id: quote.user }, { $push: { quote: quote._id } })
    return res.json(quote);
  },
  async list(req, res) {
    const quote = await Quote.find({});
    return res.json(quote);
  },
  async index(req, res) {
    const quoteId = req.params.id;
    const quote = await Quote.findOne({ _id: quoteId }).populate("user");
    return res.json(quote);
  },
  async update(req, res) {
    const quote = await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true }
    );
    return res.json(quote);
  },
  async destroy(req, res) {
    await Quote.deleteOne({ _id: req.params.id });
    return res.json({ message: "Exclusão realizada com sucesso!" });
  }
}