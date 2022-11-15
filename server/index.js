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

app.get("/api/get/AccountType", (req,res) => {
    const sqlGet = "SELECT * FROM AccountType;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/CommissionEntry", (req,res) => {
    const sqlGet = "SELECT * FROM CommissionEntry;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/Commissions", (req,res) => {
    const sqlGet = "SELECT * FROM Commissions;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});



app.get("/api/get/Customer", (req,res) => {
    const sqlGet = "SELECT * FROM Customer;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/CustomerDocuments", (req,res) => {
    const sqlGet = "SELECT * FROM CustomerDocuments;";
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


app.get("/api/get/Dummy", (req,res) => {
    const sqlGet = "SELECT * FROM Dummy;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/EmployeeDocuments", (req,res) => {
    const sqlGet = "SELECT * FROM EmployeeDocuments;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/Employees", (req,res) => {
    const sqlGet = "SELECT * FROM Employees;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/LandDocuments", (req,res) => {
    const sqlGet = "SELECT * FROM LandDocuments;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/Lands", (req,res) => {
    const sqlGet = "SELECT * FROM Lands;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/Login", (req,res) => {
    const sqlGet = "SELECT * FROM Login;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/Passbook", (req,res) => {
    const sqlGet = "SELECT * FROM Passbook;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/PassbookDocuments", (req,res) => {
    const sqlGet = "SELECT * FROM PassbookDocuments;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/Payments", (req,res) => {
    const sqlGet = "SELECT * FROM Payments;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


app.get("/api/get/PlotPayments", (req,res) => {
    const sqlGet = "SELECT * FROM PlotPayments;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/Plots", (req,res) => {
    const sqlGet = "SELECT * FROM Plots;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/Projects", (req,res) => {
    const sqlGet = "SELECT * FROM Projects;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/Roles", (req,res) => {
    const sqlGet = "SELECT * FROM Roles;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/Users", (req,res) => {
    const sqlGet = "SELECT * FROM Users;";
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