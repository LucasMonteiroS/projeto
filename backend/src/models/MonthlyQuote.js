const { Schema, model } = require("mongoose");
const MonthlyQuoteSchema = new Schema(
  {
    mes: {
      type: String,
      required: true
    },
    cesta: {
      produto:
        [{
          nomeitem: {
            type: String,
            require: true
          },
          precoitem: {
            type: Number,
            require: true
          }
        }],
      preco: {
        type: Number,
        require: true
      }
    },
  },
  {
    timestamps: true
  }
);
module.exports = model("MonthlyQuote", MonthlyQuoteSchema)