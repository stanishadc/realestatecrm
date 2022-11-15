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


data = "INSERT INTO Passbook(PassbookId,plotId, PassbookNo, DateOfJoin, PaymentLastDate, Nominee, TotalAmount, Commission, TDS, Eligibility, Adjustment, FinalComission, pendingAmount,CreatedDate,UpdatedDate,Name, Mobile, UserId,PlotAmount, Maintainance, Address, FacingCharges, ProjectId) VALUES (%s, %s,%s,%s,%s,%s,%s.%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"

val = (3,3,"103","2022-11-15", "2022-11-15","mother","500000","50%","10","NO","No","50%","1000","2022-11-09","2022-11-09 00:00:00","sai","3564564",4, "500000","30000","pune","20",3)


mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")

# Read AccountType

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Passbook")

print("SELECTED ROWS")
for i in mycursor:
	print(i)

# AccountType Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE Passbook SET ProjectId = '4' WHERE PassbookId = 3"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")


# AccountType Delete

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "DELETE FROM Passbook WHERE PassbookId = 3"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")
