const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");


const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root123",
    database: "employee_data"
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
    const sqlGet = "SELECT * FROM employee";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

/*// POST API (INSERT)

app.post("/api/post", (req,res) => {
    const { emp_name,department,city,salary } = req.body;
    const sqlInsert =
         "INSERT INTO employee (emp_name, department, city, salary) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [emp_name,department,city,salary], (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});*/

// GET API ON SELECTED ID

/*app.get("/api/get/:id", (req,res) => {
    const {id} = req.params;
    const sqlGet = "SELECT * FROM employee WHERE id = ?";
    db.query(sqlGet, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});*/

// PUT API (UPDATE)

/*app.put("/api/update/:id", (req,res) => {
    const { id } = req.params;
    const { emp_name,department,city,salary } = req.body;
    const sqlUpdate = "UPDATE employee SET emp_name = ?, department = ?, city = ?, salary = ? WHERE id = ?";
    db.query(sqlUpdate, [emp_name,department,city,salary, id], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});*/


// DELETE API 

/*app.delete("/api/delete/:id", (req,res) => {
    const { id } = req.params;
    const sqlDelete =
         "UPDATE employee SET emp_name = ?, department = ?, city = ?, salary = ? WHERE id = ?";
    db.query(sqlDelete, id, (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});*/


//INSERT VALUES API 

app.get("/", (req,res)=> {
    const sqlInsert = "INSERT INTO employee (emp_name,department,city,salary) VALUES ('Kasi Govind','Python', 'Patna', 14000)";
    db.query(sqlInsert, (error,result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("Employee Data Inserted")
    });
});