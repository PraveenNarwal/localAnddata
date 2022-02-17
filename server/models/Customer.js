const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  customeremail: {
    type: String,
    required: true,
  },
});
const Customer = mongoose.model("customer", CustomerSchema);
module.exports = Customer;
