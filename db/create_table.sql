USE  fruit_market;

DROP TABLE Customer;
DROP TABLE Employee;
DROP TABLE Delivery;
DROP TABLE orderlist;
DROP TABLE Shopping_cart;

-- Customer
CREATE TABLE Customer(
   Cno         int      NOT NULL,
   Cname      varchar(45),
    Email      varchar(50),
    ID         varchar(45),
    Password    varchar(45),
    PhoneNumber varchar(45),
    Ku          varchar(45),
    Dong      varchar(45),
    City      varchar(45),
    CONSTRAINT PK_Customer PRIMARY KEY (Cno)
);

-- Employee
CREATE TABLE Employee(
   Eno         int    Not NULL,
    Ename      varchar(45),
    CONSTRAINT PK_Employee PRIMARY KEY (Eno)
);
   
-- Fruit
CREATE TABLE Fruit(
    Fno            int      Not NULL,
     Fname           varchar(45),
     Price            int,
     Count            int,
     Expiration_date   date,
     CONSTRAINT PK_Fruit PRIMARY KEY (Fno)
);
     
-- Delivery
CREATE TABLE Delivery(
   Dno         int      Not NULL,
    departure   date,
    arrival      date,
    zipcode      int, 
    product    varchar(45),
    F_Cno      int,
    CONSTRAINT PK_Delivery PRIMARY KEY (Dno),
   CONSTRAINT FK_Customer FOREIGN KEY (F_Cno) REFERENCES Customer(Cno)
);
    
-- Order
CREATE TABLE Order_list(
   Orderno      int      Not NULL,
    order_Date   date,
    Pirce      int,
    count      int,
    F_Cno2      int,
    F_Dno      int,
    F_Eno      int,
    CONSTRAINT PK_Order PRIMARY KEY (Orderno),
    CONSTRAINT FK_Customer2 FOREIGN KEY (F_Cno2) REFERENCES Customer(Cno),
    CONSTRAINT FK_Delivery FOREIGN KEY (F_Dno) REFERENCES Delivery(Dno),
    CONSTRAINT FK_Employee FOREIGN KEY (F_Eno) REFERENCES Employee(Eno)
);

-- Shopping cart
CREATE TABLE Shopping_Cart(
   Scno         int      Not NULL,
    count         int,
    price         int,
    prouductname   char(45),
    F_Orderno      int,
    F_Fno         int,
    CONSTRAINT PK_Shopping_Cart PRIMARY KEY (Scno),
    CONSTRAINT FK_Order FOREIGN KEY (F_Orderno) REFERENCES Order_list(Orderno),
    CONSTRAINT FK_Fruit FOREIGN KEY (F_Fno) REFERENCES Fruit(Fno)
);