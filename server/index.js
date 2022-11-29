const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
    host:"208.91.199.11",
    user:"ztravilr_reuser",
    password:"!yzN4a97",
    database: "ztravilr_realestatecrm"
});

app.use(cors());
app.use(express.json());

// Listen to API

app.listen(5001, () => {
    console.log(`Heloo World!...  Server is Running on Port: 5001`);
}); 

app.post("/create", (req, res) => {
    const accountName = req.body.accountName;
  
    db.query(
      "INSERT INTO AccountType (accountName ) VALUES (?)",
      [accountName],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
  
  app.get("/AccountType", (req, res) => {
    db.query("SELECT * FROM AccountType", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.put("/update", (req, res) => {
    const AccountTypeId = req.body.AccountTypeId;
    const accountName = req.body.accountName;
    db.query(
      "UPDATE AccountType SET accountName = ? WHERE AccountTypeId = ?",
      [accountName, AccountTypeId],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  
  app.delete("/delete/:AccountTypeId", (req, res) => {
    const AccountTypeId = req.params.AccountTypeId;
    db.query("DELETE FROM AccountType WHERE AccountTypeId = ?", AccountTypeId, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  