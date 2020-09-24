const mongoose = require("mongoose");

const employeesSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  city: {
    type: String,
  },
});

mongoose.model("employee", employeesSchema);
