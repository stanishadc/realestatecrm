const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");


const db = mysql.createPool({
    host: "208.91.199.11",
    user: "ztravilr_reuser",
    password: "!yzN4a97",
    database: "ztravilr_realestatecrm"
});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// Listen to API

app.listen(5000, () => {
    console.log(`Heloo World!...  Server is Running on Port: 5000`);
}); 

// GET API (SELECT)


app.get("/api/Commissionentry/", (req,res) => {
    const sqlGet = "SELECT * FROM CommissionEntry;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/AccountType/", (req,res) => {
    const sqlGet = "SELECT * FROM AccountType;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/Commissions/", (req,res) => {
    const sqlGet = "SELECT * FROM Commissions;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

// POST API (INSERT)

app.post("/api/post", (req,res) => {
    const { ReceiptNo , PassbookNo, CreatedDate, UpdatedDate, PaymentDate, Percentage, Total, TDS, Eligibility, Advance, Adjustment, Pending, Paid, MarketerName, ProjectId } = req.body;
    const sqlInsert =
         "INSERT INTO CommissionEntry ( ReceiptNo , PassbookNo, CreatedDate, UpdatedDate, PaymentDate, Percentage, Total, TDS, Eligibility, Advance, Adjustment, Pending, Paid, MarketerName, ProjectId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [ReceiptNo , PassbookNo, CreatedDate, UpdatedDate, PaymentDate, Percentage, Total, TDS, Eligibility, Advance, Adjustment, Pending, Paid, MarketerName, ProjectId], (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});

app.post("/api/post", (req,res) => {
    const { AccountName } = req.body;
    const sqlInsert =
         "INSERT INTO AccountType ( AccountName ) VALUES (?)";
    db.query(sqlInsert, [AccountName], (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});

// DELETE API (BASED ON ID)


app.delete("/api/delete/:CommissionEntryId", (req,res) => {
    const { CommissionEntryId } = req.params;
    const sqlDelete =
         "DELETE FROM CommissionEntry WHERE CommissionEntryId = ?";
    db.query(sqlDelete, CommissionEntryId, (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});

app.delete("/api/delete/:AccountTypeId", (req,res) => {
    const { AccountTypeId } = req.params;
    const sqlDelete =
         "DELETE FROM AccountType WHERE AccountTypeId = ?";
    db.query(sqlDelete, AccountTypeId, (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});
 
// GET API ON SELECTED ID

app.get("/api/Commissionentry/:CommissionEntryId", (req,res) => {
    const {CommissionEntryId} = req.params;
    const sqlGet = "SELECT * FROM CommissionEntry WHERE CommissionEntryId = ?";
    db.query(sqlGet, CommissionEntryId, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.get("/api/AccountType/:AccountTypeId", (req,res) => {
    const {AccountTypeId} = req.params;
    const sqlGet = "SELECT * FROM AccountType WHERE AccountTypeId = ?";
    db.query(sqlGet, AccountTypeId, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});
 
// GET API ON ID

app.get("/api/Commissionentry", (req,res) => {
    const { CommissionEntryId } = req.params;
    const sqlGet = "SELECT * FROM CommissionEntry WHERE CommissionEntryId = ?";
    db.query(sqlGet, CommissionEntryId, (error, result) => {
       if (error) {
        console.log(error);
       } 
       res.send(result);
    });
});


app.get("/api/AccountType", (req,res) => {
    const { AccountTypeId } = req.params;
    const sqlGet = "SELECT * FROM AccountType WHERE AccounTypeId = ?";
    db.query(sqlGet, AccountTypeId, (error, result) => {
       if (error) {
        console.log(error);
       } 
       res.send(result);
    });
});

// PUT API (UPDATE)

app.put("/api/update/:CommissionEntryId", (req,res) => {
    const { CommissionEntryId } = req.params;
    const { ReceiptNo, PassbookNo, CreatedDate, UpdatedDate, PaymentDate, Percentage, Total, TDS, Eligibility, Advance, Adjustment, Pending, Paid, MarketerName, ProjectId } = req.body;
    const sqlUpdate = "UPDATE CommissionEntry SET ReceiptNo = ?, PassbookNo = ?, CreatedDate = ?, UpdatedDate = ?, PaymentDate = ?, Percentage = ?, Total = ?, TDS = ?, Eligibility = ?, Advance = ?, Adjustment = ?, Pending = ?, Paid = ?, MarketerName = ?, ProjectId = ? WHERE CommissionEntryId = ?";
    db.query(sqlUpdate, [ ReceiptNo, PassbookNo, CreatedDate, UpdatedDate, PaymentDate, Percentage, Total, TDS, Eligibility, Advance, Adjustment, Pending, Paid, MarketerName, ProjectId, CommissionEntryId], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/api/update/:AccountTypeId", (req,res) => {
    const { AccountTypeId } = req.params;
    const { AccountName } = req.body;
    const sqlUpdate = "UPDATE AccountType SET Accountame = ? WHERE AccountTypeId = ?";
    db.query(sqlUpdate, [AccountName , AccountTypeId], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});