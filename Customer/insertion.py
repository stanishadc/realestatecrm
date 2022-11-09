# Customer Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Customer (CustomerId, Name, CustomerNo, Email, Mobile, AlternateMobile, Address, CreatedDate, UpdatedDate, DateOfJoin, Status) VALUES (%s,%s,%s,%s, %s,%s,%s,%s, %s,%s,%s)"

val =  (3, "Poorna", "113", "poorna@gmail.com", "9966557755", "9998866666", "Kukatpalley", "2022-11-09 00-00-55", "09-11-2022 00-00-00", "09-11-2022 00-00-00", 1)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
