# Connect Databases

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")


mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)

# Dummy Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Dummy (DummyId, Name, Plots, Status) VALUES (%s,%s,%s,%s)"

val =  (15, "Moulali", 135, 0)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

# Dummy Read

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Dummy")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# Dummy Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE Dummy SET Name = 'Kukatpally' WHERE DummyId = 15"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")

# Dummy Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM Dummy WHERE Name = 'Madhapur' "

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")
