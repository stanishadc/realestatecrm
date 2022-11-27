import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM Projects ORDER BY CODE")

print("ORDER BY")

for i in mycursor:
	print(i)

print("LIMIT")

mycursor = mydb.cursor()

where = "SELECT * FROM Projects LIMIT 3 OFFSET 2"

mycursor.execute(where)

result = mycursor.fetchall()

for i in result:
  print(i)
