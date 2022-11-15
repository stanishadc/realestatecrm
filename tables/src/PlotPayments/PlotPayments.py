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


data = "INSERT INTO PlotPayments (CreditPaymentId, ReceiptNo, PassbookId,AccountTypeId,Amount, PaymentDate, Remarks, PaymentMethod,PaymentDetails,UserId,CreatedDate,UpdatedDate, OpeningBalance, ClosingBalance) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"

val = (113, 103, 1011, 201, "50.00", "2022-11-09", "yes", "online", "BankTransaction", 3, "2022-11-09", "2022-11-09 00:00:13", "10.00", "20.00")

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

# Read AccountType

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM PlotPayments ")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# AccountType Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE PlotPayments SET ReceiptNo = '103' WHERE CreditPaymentId = 113"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")


# AccountType Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM PlotPayments WHERE CreditPaymentId = 5"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")
