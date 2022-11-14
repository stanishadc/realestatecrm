# Connect Databases

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")


mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)

# Commissions Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Commissions (CommissionId, ReceiptNo, EmployeeId, Commission, Amount, PassbookNo, CreatedDate, UpdatedDate, TDS, Adjustment, Eligibility, Advance, Status, PaymentDate, PaymentMethod, PaymentDetails) VALUES (%s,%s,%s,%s, %s,%s,%s,%s, %s,%s,%s,%s, %s,%s,%s,%s)"

val =  (3, 13, 3, 45000, 4500.00, "103", "2022-11-09 00-45-00", "2022-11-09 00-00-55", 436.80, 400.99, 422.00, 7000.00, 0, "09-11-2022 00-00-00", "DD", "Urban Bank")

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

#  Commissions

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Commissions")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# Commissions Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE Commissions SET PaymentDetails = 'Fedral Bank' WHERE PassbookNo = 103"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")


# Commissions Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM Commissions WHERE PassbookNo = 103"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")
