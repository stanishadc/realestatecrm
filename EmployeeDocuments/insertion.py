# EmployeeDocuments Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO EmployeeDocuments (EmployeeDocumentId, DocumentName, EmployeeId, DocumentUrl) VALUES (%s,%s,%s,%s)"

val =  (11, "Aadhar", 1, "PDF")

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
