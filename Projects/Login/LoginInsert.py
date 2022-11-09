import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Login(LoginId, Status) VALUES (%s,%s)"

val = (5, 0)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
