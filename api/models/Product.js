const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    dealer: String,
    categories: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
