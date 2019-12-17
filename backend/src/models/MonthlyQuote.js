const { Schema, model } = require("mongoose");
const MonthlyQuoteSchema = new Schema(
  {
    mes: {
      type: String,
      required: true,
      enum: { values: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'] }
    },
    commerce: {
      type: Schema.Types.ObjectId,
      ref: "Commerce"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
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
          }, _id: false
        }],
      preco: {
        type: Number,
        require: true
      }, _id: false
    },
  },
  {
    timestamps: true
  }
);
MonthlyQuoteSchema.pre('save', function (next) {
  console.log(this.cesta.produto[0].precoitem);

  this.cesta.produto.forEach(element => {
    this.cesta.preco += element.precoitem
  });

  next();
})
module.exports = model("MonthlyQuote", MonthlyQuoteSchema)