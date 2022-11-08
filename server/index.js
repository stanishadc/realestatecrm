const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host:"208.91.199.11",
    user:"ztravilr_reuser",
    password:"!yzN4a97",
    database: "ztravilr_realestatecrm"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get", (req,res) => {
    const sqlGet = "SELECT * FROM Plots";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


app.get("/", (req,res)=> {
    const sqlInsert = "INSERT INTO Plots (PlotNo, ProjectID, Status, Facing, PlotSize, Amount, MaintainanceCharges, FacingCharges) VALUES (33, 87, 3, 'South', '89 sqft', '99753.50', '75330.00', '35260.99')";
    db.query(sqlInsert, (error,result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("sql server")
        console.log("Row Created : Go to http://localhost:1000/api/get")
    });
}); 


app.listen(1000, () => {
    console.log(`Heloo User!...  Server is Running on Port: 1000`);
});