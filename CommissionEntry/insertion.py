# CommissionEntry Values Insertion

import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO CommissionEntry (CommissionEntryId, ReceiptNo, PassbookNo, CreatedDate, UpdatedDate, PaymentDate, Percentage, Total, TDS, Eligibility, Advance, Adjustment, Pending, Paid, MarketerName, ProjectId) VALUES (%s,%s,%s,%s, %s,%s,%s, %s,%s, %s,%s,%s, %s,%s,%s, %s)"

val =  (3, 13, 103, "09-11-2022", "09-11-2022", "09-11-2022", 352.55, 226.80, 292.99, 322.00, 5000.00, 2500.00, 3000.00, 2500.00, "Poona", 3)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
