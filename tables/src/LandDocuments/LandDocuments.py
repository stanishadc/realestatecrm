# Connect Databases

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")


mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)

# LandDocuments Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO LandDocuments (LandDocumentId, DocumentName, PassbookId, DocumentUrl) VALUES (%s,%s,%s,%s)"

val =  (111, "Aadhar", 11, "PDF")

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

# LandDocuments Read

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM LandDocuments")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# LandDocuments Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE LandDocuments SET DocumentName = 'Aadhar' WHERE PassbookId = 13 "

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")

# LandDocuments Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM LandDocuments WHERE LandDocumentId = 115 "

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")
