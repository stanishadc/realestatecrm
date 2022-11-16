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

app.get("/api/get/AccountType", (req,res) => {
    const sqlGet = "SELECT * FROM AccountType;";
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

app.get("/api/get/Lands", (req,res) => {
    const sqlGet = "SELECT * FROM Lands;";
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

app.post("/api/post/AccountType", (req,res) => {
    const { AcccountName } = req.body;
    const sqlInsert =
         "INSERT INTO AccountType (AccountName) VALUES ( ? )";
    db.query(sqlInsert, [AcccountName], (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});

app.post("/api/post/Login", (req,res) => {
    const { Status } = req.body;
    const sqlInsert =
         "INSERT INTO Login (Status) VALUES ( ? )";
    db.query(sqlInsert, [Status], (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});

app.post("/api/post/Lands", (req,res) => {
    const { LandName, DateOfPurchase, LandCost } = req.body;
    const sqlInsert =
         "INSERT INTO Lands (LandName, DateOfPurchase, LandCost) VALUES ( ?, ?, ? )";
    db.query(sqlInsert, [LandName, DateOfPurchase, LandCost], (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});

app.post("/api/post/Roles", (req,res) => {
    const { Name, Status } = req.body;
    const sqlInsert =
         "INSERT INTO Roles (Name, Status) VALUES ( ?, ? )";
    db.query(sqlInsert, [Name, Status], (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});

app.post("/api/post/Users", (req,res) => {
    const { UserName, Password, Status, RoleId } = req.body;
    const sqlInsert =
         "INSERT INTO Users (UserName, Password, Status, RoleId) VALUES ( ?, ?, ?, ? )";
    db.query(sqlInsert, [UserName, Password,  Status, RoleId], (error, result) => {
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

app.delete("/api/delete/:LoginId", (req,res) => {
    const { LoginId } = req.params;
    const sqlDelete =
         "DELETE FROM Login WHERE LoginId = ?";
    db.query(sqlDelete, LoginId, (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});

app.delete("/api/delete/:LandId", (req,res) => {
    const { LandId } = req.params;
    const sqlDelete =
         "DELETE FROM Lands WHERE LandId = ?";
    db.query(sqlDelete, LandId, (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});

app.delete("/api/delete/:RoleId", (req,res) => {
    const { RoleId } = req.params;
    const sqlDelete =
         "DELETE FROM Roles WHERE RoleId = ?";
    db.query(sqlDelete, RoleId, (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});
 
app.delete("/api/delete/:UserId", (req,res) => {
    const { UserId } = req.params;
    const sqlDelete =
         "DELETE FROM Users WHERE UserId = ?";
    db.query(sqlDelete, UserId, (error, result) => {
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

app.get("/api/view/:LoginId", (req,res) => {
    const { LoginId } = req.params;
    const sqlGet = "SELECT * FROM Login WHERE LoginId = ?";
    db.query(sqlGet, LoginId, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.get("/api/view/:LandId", (req,res) => {
    const { LandId } = req.params;
    const sqlGet = "SELECT * FROM Lands WHERE LandId = ?";
    db.query(sqlGet, LandId, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.get("/api/view/:RoleId", (req,res) => {
    const { RoleId } = req.params;
    const sqlGet = "SELECT * FROM Roles WHERE RoleId = ?";
    db.query(sqlGet, RoleId, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.get("/api/view/:UserId", (req,res) => {
    const { UserId } = req.params;
    const sqlGet = "SELECT * FROM Users WHERE UserId = ?";
    db.query(sqlGet, UserId, (error, result) => {
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

app.get("/api/get/:LoginId", (req,res) => {
    const { LoginId } = req.params;
    const sqlGet = "SELECT * FROM Login WHERE LoginId = ?";
    db.query(sqlGet, LoginId, (error, result) => {
       if (error) {
        console.log(error);
       } 
       res.send(result);
    });
});
app.get("/api/get/:LandId", (req,res) => {
    const { LandId } = req.params;
    const sqlGet = "SELECT * FROM Lands WHERE LandId = ?";
    db.query(sqlGet, LandId, (error, result) => {
       if (error) {
        console.log(error);
       } 
       res.send(result);
    });
});

app.get("/api/get/:RoleId", (req,res) => {
    const { RoleId } = req.params;
    const sqlGet = "SELECT * FROM Roles WHERE RoleId = ?";
    db.query(sqlGet, RoleId, (error, result) => {
       if (error) {
        console.log(error);
       } 
       res.send(result);
    });
});

app.get("/api/get/:UserId", (req,res) => {
    const { UserId } = req.params;
    const sqlGet = "SELECT * FROM Users WHERE UserId = ?";
    db.query(sqlGet, UserId, (error, result) => {
       if (error) {
        console.log(error);
       } 
       res.send(result);
    });
});

// PUT API (UPDATE)

app.put("/api/update/:AccountTypeId", (req,res) => {
    const { AccountTypeId } = req.params;
    const { AccountName} = req.body;
    const sqlUpdate = "UPDATE AccountType SET AccountName = ? WHERE AccountTypeId = ?";
    db.query(sqlUpdate, [AccountName,AccountTypeId], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/api/update/:LoginId", (req,res) => {
    const { LoginId } = req.params;
    const { Status} = req.body;
    const sqlUpdate = "UPDATE Login SET Status = ? WHERE LoginId = ?";
    db.query(sqlUpdate, [Status,LoginId], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});
app.put("/api/update/:LandId", (req,res) => {
    const { LandId } = req.params;
    const { LandName, } = req.body;
    const sqlUpdate = "UPDATE Lands SET LandName = ? WHERE LandId = ?";
    db.query(sqlUpdate, [LandName,LandId], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/api/update/:RoleId", (req,res) => {
    const { RoleId } = req.params;
    const { Name, } = req.body;
    const sqlUpdate = "UPDATE Roles SET Name = ? WHERE RoleId = ?";
    db.query(sqlUpdate, [Name,RoleId], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});


app.put("/api/update/:UserId", (req,res) => {
    const { UserId } = req.params;
    const { Name, } = req.body;
    const sqlUpdate = "UPDATE Roles SET Name = ? WHERE RoleId = ?";
    db.query(sqlUpdate, [Name,RoleId], (error, result) => {
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

