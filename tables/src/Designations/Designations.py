# Connect Databases

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")


mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)

# Designations Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Designations (DesignationId, Name, Status, Commission, ParentId) VALUES (%s,%s,%s,%s, %s)"

val =  (3, "Supervisor", 0, 18000.00, 113)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")


# Designations

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Designation")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# Designations Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE Designations SET Name = 'Executive' WHERE ParentId = 113"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")

# Designations Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM Designations WHERE Name = 'Supervisor' "

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")