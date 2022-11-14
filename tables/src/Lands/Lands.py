# Connect Databases

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")


mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)

# Lands Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Lands (LandId, LandName, DateofPurchase, LandCost) VALUES (%s,%s,%s,%s)"

val =  (1041, "Tankbund", "2022-11-09 00-01-00", 2700000.00)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

# Lands Read

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Lands")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# Lands Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE Lands SET LandCost = 3330000 WHERE LandName = 'Tankbund' "

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")

# Lands Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM Lands WHERE LandId = 1 "

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")
