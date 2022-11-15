# Connect to SQL Workbench

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")


mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)

# AccountType Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Login (LoginId, Status) VALUES (%s, %s)"

val = (5, 0)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

# Read AccountType

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Login")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# AccountType Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE Login SET Status = '0' WHERE LoginId = 5"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")


# AccountType Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM Login WHERE Login = 5"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")
