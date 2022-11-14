# Connect Databases

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")


mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)

# EmployeeDocuments Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO EmployeeDocuments (EmployeeDocumentId, DocumentName, EmployeeId, DocumentUrl) VALUES (%s,%s,%s,%s)"

val =  (11, "Aadhar", 1, "PDF")

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

# EmployeeDocuments

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM EmployeeDocuments")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# EmployeeDocuments Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE EmployeeDocuments SET DocumentName = 'Aadhar' WHERE EmployeeId = 4"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")

# EmployeeDocuments Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM EmployeeDocuments WHERE DocumentName = 'Voter Id Card' "

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")