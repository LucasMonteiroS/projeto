const { Schema, model } = require("mongoose");

const CommerceSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    nomerua: {
      type: String,
      required: true
    },
    numerorua: {
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
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Commerce", CommerceSchema)
//Type: Schema.Types.ObjectId,
//ref: "User"