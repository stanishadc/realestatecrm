# Lands Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Lands (LandId, LandName, DateofPurchase, LandCost) VALUES (%s,%s,%s,%s)"

val =  (1041, "Tankbund", "2022-11-09 00-01-00", 2700000.00)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
