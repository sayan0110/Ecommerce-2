const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    minlength: 3,
    trim: true,
  },
  email: String,
  password: String,
  products: {
    types: Array,
    default: [],
  },
  picture: String,
  gstin: String,
});

module.exports = mongoose.model("owner", ownerSchema);
