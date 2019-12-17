const { Schema, model } = require("mongoose");

const CommerceSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    nome_rua: {
      type: String,
      required: true
    },
    numero_rua: {
      type: Number,
      required: true
    },
    bairro: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Commerce", CommerceSchema)
//Type: Schema.Types.ObjectId,
//ref: "User"