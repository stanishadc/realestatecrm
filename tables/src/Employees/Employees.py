# Connect Databases

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")


mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)

# Employees Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Employees (EmployeeId, EmployeeNo, Name, DesginationId, DateOfJoin, DateofLeaving, Gender, Mobile, Email, AlternateMobile, Address, Status, CreatedDate, UpdatedDate, ParentEmpId) VALUES (%s,%s,%s,%s, %s,%s,%s,%s, %s,%s,%s,%s, %s,%s,%s)"

val =  (3, 103 , "Hari", 13, "2022-09-18 00-00-00", "2022-10-30 00-00-00", "Male", "8887755662", "hari@gmail.com", "7867544235", "Kukatpalley", 1, "2022-07-17 00-00-00", "2022-08-01 00-00-00", 1113)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

# Employees Read

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Employees")

print("SELECTED ROWS")
for i in mycursor:
	print(i)
    
# Employees Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE Employees SET Address = 'Pragathinagar' WHERE EmployeeNo = 103"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")

# EmployeeDocuments Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM Employees WHERE EmployeeNo = 104"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")