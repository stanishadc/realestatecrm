# Connect Databases

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")


mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)

# Plots Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Plots(PlotNo, ProjectID, Status, Facing, PlotSize, Amount, MaintainanceCharges, FacingCharges) VALUES (%s, %s,%s,%s, %s,%s,%s, %s)"

val = (10, 66, 2, "North", "75 sqft", "85920.10", "45200.00", "21680.80")

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

# Read Plots

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Plots")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# Plots Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE Plots SET Status = 0 WHERE PlotNo = 7"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")

# Plots Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM Plots WHERE PlotNo = 8"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")
