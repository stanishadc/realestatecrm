import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO PassbookDocuments(PassbookDocumentsId, DocumentName, PassbookId, DocumentUrl) VALUES (%s,%s,%s,%s)"

val = (11, "Lahiq", 101, "pdf")

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
