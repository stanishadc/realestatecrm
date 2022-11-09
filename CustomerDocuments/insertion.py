# CustomerDocuments Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO CustomerDocuments (CustomerDocumentId, DocumentName, CustomerId) VALUES (%s,%s,%s)"

val =  (111, "Aadhar", 11)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
