const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");


const db = mysql.createPool({
    host :"208.91.199.11", 
    user :"ztravilr_reuser",
    password : "!yzN4a97",
    database :"ztravilr_realestatecrm"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// Listen to API

app.listen(5000, () => {
    console.log(`Heloo World!...  Server is Running on Port: 5000`);
}); 

// GET API (SELECT)

app.get("/api/get", (req,res) => {
    const sqlGet = "SELECT * FROM Dummy;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/Designations/", (req,res) => {
    const sqlGet = "SELECT * FROM Designations;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

// POST API (INSERT)

app.post("/api/post", (req,res) => {
    const { DummyId,Name,Plots,Status } = req.body;
    const sqlInsert =
         "INSERT INTO Dummy (DummyId, Name, Plots, Status) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [DummyId, Name, Plots, Status], (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});

// PUT API (UPDATE)

app.put("/api/update/:id", (req,res) => {
    const { id } = req.params;
    const { DummyId, Name, Plots, Status } = req.body;
    const sqlUpdate = "UPDATE employee SET DummyId = ?, Name = ?, Plots = ?, Status = ? WHERE id = ?";
    db.query(sqlUpdate, [DummyId,Name, Plots, Status, id], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

// DELETE API (BASED ON ID)

app.delete("/api/delete/:id", (req,res) => {
    const { id } = req.params;
    const sqlDelete =
         "DELETE FROM Dummy WHERE DummyId = ?";
    db.query(sqlDelete, id, (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});
 
// GET API ON SELECTED ID
 
app.get("/api/view/:id", (req,res) => {
    const {id} = req.params;
    const sqlGet = "SELECT * FROM Dummy WHERE id = ?";
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});



//INSERT VALUES API 

/*app.get("/", (req,res)=> {
    const sqlInsert = "INSERT INTO AccountType (AccountTypeId, AccountName) VALUES (5, 'Savings')";
    db.query(sqlInsert, (error,result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("Data Inserted")
    });
});*/

app.get("/", (req,res)=> {
    const sqlInsert = "INSERT INTO Dummy (DummyId, Name, Plots, Status) VALUES (17, 'Korukonda', 175, 1)";
    db.query(sqlInsert, (error,result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("Data Inserted")
    });
});