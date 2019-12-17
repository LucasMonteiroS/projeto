const Commerces = require("../models/Commerce")
module.exports = {
  async store(req, res) {
      const comercio = await Commerces.create(req.body);
      return res.json(comercio);
  },
  async list(req, res) {
      const comercio = await Commerces.find({}).populate('Commerce');
      return res.json(comercio);
  },
  async index(req, res) {
      const comercio= await Commerces.findOne({ numero_rua: req.params.numero_rua });

      if (!comercio) {
          return res.status(400).json({ error: "Comércio não encontrado!" });
      }
      return res.json(comercio);
  },
  async update(req, res) {
      const comercio = await Commerces.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json(comercio);
  },
  async destroy(req, res) {
      await Comercio.deleteOne({ _id: req.params.id });
      return res.json({ message: "Excluido com Sucesso!!" });
  }
};
