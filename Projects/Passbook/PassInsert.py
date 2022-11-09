import mysql.connector

mydb = mysql.connector.connect(host = "208.91.199.11", user = "ztravilr_reuser", passwd = "!yzN4a97", database = "ztravilr_realestatecrm")

mycursor = mydb.cursor()


data = "INSERT INTO Passbook(PassbookId, PlotId, PassbookNo, DateOfJoin, PaymentLastDate, Nominee, TotalAmount, Commission, TDS, Eligibility, Adjustment, FinalComission, PendingAmount, CreatedDate, UpdatedDate, Name, Mobile, UserId, PlotAmount, Maintainance, Address, FacingCharges, ProjectId) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"

val = (1, "1", "101", "2022-11-08", "2022-11-09", "Father", "200000", "20%", "10", "yes", "yes", "50%", "100", "2022-11-09", "2022-11-09 00-00-00", "Vijji", "54684668", 1, "200000", 20, "Hyd", "20", 1  )

mycursor.execute(data, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
