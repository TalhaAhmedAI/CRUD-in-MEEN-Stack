const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/EmployeesDB",
  { useNewUrlParser: true },
  (err) => {
    if (!err) console.log("Mongodb connection succeeded");
    else console.log(`Error in DB connection: ${err}`);
  }
);

require("./employee.model");
