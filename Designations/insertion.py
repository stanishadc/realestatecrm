# Designations Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Designations (DesignationId, Name, Status, Commission, ParentId) VALUES (%s,%s,%s,%s, %s)"

val =  (3, "Supervisor", 0, 18000.00, 113)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
