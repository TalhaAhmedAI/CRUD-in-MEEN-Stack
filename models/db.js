const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/EmployeeDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connection succeeded");
    else console.log(`Error in DB connection: ${err}`);
  }
);

require("./employee.model");
