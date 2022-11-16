const express = require("express");
const app = express();
const bodyParser = require("body-parser");
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
app.use(bodyParser.urlencoded({extended:true}));

// Listen to API

app.listen(5001, () => {
    console.log(`Heloo World!...  Server is Running on Port: 5001`);
}); 

// GET API (SELECT)

app.get("/api/get/", (req,res) => {
    const sqlGet = "SELECT * FROM AccountType;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


// Sample Data Insertion 

/*app.get("/", (req,res) => {
    const sqlSampleInsert =
         "INSERT INTO employee (emp_name, department, city, salary) VALUES ('Rajesh','Supervisior','Hyderabad', 16000)";
    db.query(sqlSampleInsert,(error, result) => {
        console.log("error", error);
        console.log("result", result);
       })
       console.log("Data Inserted Successfully Go to /api/get");
    })*/

// POST API (INSERT)

app.post("/api/post", (req,res) => {
    const { AcccountName } = req.body;
    const sqlInsert =
         "INSERT INTO AccountType (AccountName) VALUES ( ? )";
    db.query(sqlInsert, [AcccountName], (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});


// DELETE API (BASED ON ID)

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
 
app.get("/api/view/:AccountTypeId", (req,res) => {
    const { AccountTypeId } = req.params;
    const sqlGet = "SELECT * FROM AccountType WHERE AccountTypeId = ?";
    db.query(sqlGet, AccountTypeId, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

// GET API ON ID

app.get("/api/get/:AccountTypeId", (req,res) => {
    const { AccountTypeId } = req.params;
    const sqlGet = "SELECT * FROM AccountType WHERE AccountTypeId = ?";
    db.query(sqlGet, AccountTypeId, (error, result) => {
       if (error) {
        console.log(error);
       } 
       res.send(result);
    });
});

// PUT API (UPDATE)

app.put("/api/update/:AccountTypeId", (req,res) => {
    const { AccountTypeId } = req.params;
    const { AcccountName} = req.body;
    const sqlUpdate = "UPDATE AccountType SET AccountName = ? WHERE AccountTypeId = ?";
    db.query(sqlUpdate, [AcccountName,AccountTypeId], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});


//INSERT VALUES DIFFERENT API'S

/*app.get("/", (req,res)=> {
    const sqlInsert = "INSERT INTO AccountType (AccountName) VALUES ('Savings')";
    db.query(sqlInsert, (error,result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("Data Inserted")
    });
});*/

/*app.get("/", (req,res)=> {
    const sqlInsert = "INSERT INTO Dummy (Name, Plots, Status) VALUES (17, 'Korukonda', 175, 1)";
    db.query(sqlInsert, (error,result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("Data Inserted")
    });
});*/


