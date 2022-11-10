import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Projects(ProjectId, Name, NoofPlots, GoogleMapAddress, Address, Description, CreatedDate, UpdatedDate, Status) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)"

val = (5, "MNOProject", 105, "Pune", "TNagar", "2HBK", "2022-11-8 00-00-22", "2022-11-8 00-00-22", 1)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
