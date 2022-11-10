# EmployeeDocuments

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM EmployeeDocuments")

print("SELECTED ROWS")
for i in mycursor:
	print(i)