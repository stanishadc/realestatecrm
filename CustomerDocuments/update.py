# CustomerDocuments Update

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "UPDATE CustomerDocuments SET DocumentName = 'Driving Card' WHERE CustomerId = 13"

mycursor.execute(data)

mydb.commit()

print(mycursor.rowcount, "record(s) affected")