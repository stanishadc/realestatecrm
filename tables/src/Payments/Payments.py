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


data = "INSERT INTO Payments (PaymentId, ReceiptNo, PassbookId,AccountTypeId,Amount, PaymentDate, Remarks, PaymentMethod,PaymentDetails,UserId,CreatedDate,UpdatedDate,PaymentType, OpeningBalance, ClosingBalance, MarketerName) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"

val = (113, 103, 1011, 201, "50.00", "2022-11-09", "yes", "online", "BankTransaction", 3, "2022-11-09", "2022-11-09 00:00:13", "online", "10.00", "20.00", "lahiq")

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

# Read AccountType

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Payments")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# AccountType Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE Payments SET ReceiptNo = '104' WHERE PaymentId = 113"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")


# AccountType Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM Payments WHERE PaymentId = 113"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")
