# Connect Databases

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")


mycursor = mydb.cursor()

mycursor.execute("show databases")

for i in mycursor:
	print(i)
	
# CommissionEntry Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO CommissionEntry (CommissionEntryId, ReceiptNo, PassbookNo, CreatedDate, UpdatedDate, PaymentDate, Percentage, Total, TDS, Eligibility, Advance, Adjustment, Pending, Paid, MarketerName, ProjectId) VALUES (%s,%s,%s,%s, %s,%s,%s, %s,%s, %s,%s,%s, %s,%s,%s, %s)"

val =  (3, 13, 103, "09-11-2022", "09-11-2022", "09-11-2022", 352.55, 226.80, 292.99, 322.00, 5000.00, 2500.00, 3000.00, 2500.00, "Poona", 3)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

#  CommissionEntry Read

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM CommissionEntry")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# CommissionEntry Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE CommissionEntry SET MarketerName = 'Kasi' WHERE PassbookNo = 104"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")

# CommissionEntry Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM CommissionEntry WHERE PassbookNo = 105"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")


