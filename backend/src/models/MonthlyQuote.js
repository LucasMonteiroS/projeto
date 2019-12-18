const { Schema, model } = require("mongoose");
const MonthlyQuoteSchema = new Schema(
  {
    user: {type: Schema.Types.ObjectId,
    ref: 'User',
    required: true},
    comercio: {type: Schema.Types.ObjectId,
      ref: 'Commerce',
      required: true},
    mes: {
      type: String,
      required: true
    },
    cesta: {
      type: String,
      required:true 
        },
      preco: {
        type: Number,
        required: true
      }
    },
  {
    timestamps: true
  }
);
module.exports = model("MonthlyQuote", MonthlyQuoteSchema)