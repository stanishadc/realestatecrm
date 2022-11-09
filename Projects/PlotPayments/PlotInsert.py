import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO PlotPayments(CreditPaymentId, ReceiptNo, PassbookId, AccountTypeId, Amount, PaymentDate, Remarks, PaymentMethod, PaymentDetails, UserId, CreatedDate, UpdatedDate, OpeningBalance, ClosingBalance) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"

val = (111, 101, 1011, 201, 650.00, "2022-11-09", "yes", "online", "BankTransaction", 1, "2022-11-09", "2022-11-09 00-00-13", 10.00, 200.00,)

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
