# Connect Databases

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")


mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)

# CustomerDocuments Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO CustomerDocuments (CustomerDocumentId, DocumentName, CustomerId) VALUES (%s,%s,%s)"

val =  (111, "Aadhar", 11)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

#  CustomerDocuments

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM CustomerDocuments")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# CustomerDocuments Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE CustomerDocuments SET DocumentName = 'Driving Card' WHERE CustomerId = 13"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")

# CustomerDocuments Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM CustomerDocuments WHERE CustomerId = 16"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")


