const express = require("express");
const { mongoose } = require("mongoose");
const app = express();

const CustomerModel = require("./models/Customer");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://newuser:1234abcd@cluster0.mh6ic.mongodb.net/customer?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .catch((error) => console.error(error));

app.post("/insert", async (req, res) => {
  const customerName = req.body.customerName;
  const phone = req.body.phone;
  const customeremail = req.body.customeremail;
  const customer = new CustomerModel({
    customerName: customerName,
    phone: phone,
    customeremail: customeremail,
  });
  try {
    await customer.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("server is running on port .....");
});
