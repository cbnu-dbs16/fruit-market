USE  fruit_market;

DROP DATABASE fruit_market;
CREATE DATABASE fruit_market;

DROP TABLE Customer;
DROP TABLE fruits;
DROP TABLE cart;
DROP TABLE comments;

-- Customer 
CREATE TABLE Customer(
   Cno               int      NOT NULL PRIMARY KEY,
   username          varchar(45),
   Email             varchar(50),
   cus_id            varchar(45),  
   cus_password      varchar(45),  
   PhoneNumber       varchar(45)
   
);

 ALTER TABLE Customer ADD UNIQUE KEY (cus_id);
 
 
-- Fruit 
CREATE TABLE fruits( 
   fno               int      Not NULL PRIMARY KEY,
   fname             varchar(45),
   fimage            varchar(1024),
   Price             int,
   Count             int,
   Expiration_date   date 
);


 ALTER TABLE fruits ADD UNIQUE KEY (fname);
 ALTER TABLE fruits ADD UNIQUE KEY (fno);
 
CREATE TABLE cart(
    cart_id                int      Not NULL PRIMARY KEY,  -- 장바구니 번호 -- 
    fk_cus_id              varchar(45),                    -- 고객 아이디 --
    fk_fname               varchar(45),                    -- 과일이름 가져오기 -- 
    CONSTRAINT FK_Customer FOREIGN KEY (fk_cus_id) REFERENCES Customer(cus_id),
    CONSTRAINT FK_fruits   FOREIGN KEY (fk_Fname) REFERENCES fruits(fname)
);

 -- comments 
 CREATE TABLE comments(
    com_id                    INT         NOT NULL PRIMARY KEY,
    comment                   varchar(100),  -- 후기 내용
    fk_fno                    int ,          -- 과일정보 가져오기 
    CONSTRAINT FK_infofruits  FOREIGN KEY (fk_fno) REFERENCES fruits(fno)
 );
 

    
INSERT INTO fruits()
VALUES
   (1, '유명산지 머스크 멜론' , 'https://user-images.githubusercontent.com/63364990/144429788-bc133fa0-0bdb-4163-a375-1ef4d548b10f.png', 1000 , null, null),
    (2, '향기가득 샤인머스캣' , 'https://user-images.githubusercontent.com/63364990/144429275-048d8aa0-02ec-4132-bba9-5b233c208d06.png' , 5000 , null , null),
    (3, '대추방울토마토' , 'https://user-images.githubusercontent.com/63364990/144430034-96731aa5-7d59-4107-8384-5b8ebbe77ac3.png' , 1000 , null, null),
    (4, '컷팅 파인애플', 'https://user-images.githubusercontent.com/63364990/144431372-cb830dab-e75d-433a-a197-8ca486d8cd59.png' , 3000 , null, null),
    (5, '실속 아보카도' , 'https://user-images.githubusercontent.com/63364990/144431391-039a362d-800e-40ff-95b6-fff43686c750.png' , 10000, null, null),
    (6, '친환경 제주 레몬','https://user-images.githubusercontent.com/63364990/144431413-1d8d0eee-13a4-4644-b146-e5cbaa1c224b.png', 10000, null, null),
    (7, '엔비 사과', 'https://user-images.githubusercontent.com/63364990/144431421-b57e9fa5-b800-493c-a7ec-737eebf5bc1d.png' , 10000, null , null),
    (8, '친환경 하우스 딸기' , 'https://user-images.githubusercontent.com/63364990/144431432-91f1f205-38c8-454a-8997-3d6045fcfd38.png' , 10000 , null, null),
    (9 , '국산 유기농 바나나' , 'https://user-images.githubusercontent.com/63364990/144431440-3c35aff5-9202-4cae-a37c-4311c576152c.png' , 10000, null, null),
    (10, '칠레산 생체리' , 'https://user-images.githubusercontent.com/63364990/144431444-3cde0cef-3cd7-4390-8ed0-f4482fbc43fb.png' , 10000, null, null),
    (11, '그린 파파야' , 'https://user-images.githubusercontent.com/63364990/144431448-13ead1c7-35cc-4f1e-8dba-fe802b4a6e12.png' , 10000, null, null),
    (12, '미국산 석류' , 'https://user-images.githubusercontent.com/63364990/144431453-a34cd553-cb7d-4269-a15f-c7592a1d08d8.png' , 10000 , null, null),
    (13, '새콤달콤 당도선별 제주감귤' , 'https://user-images.githubusercontent.com/63364990/144431456-b6b4d7bf-2ebb-4236-a97b-3e3e8bf01ec4.png' , 15000, null, null),
    (14, '멕시코 생 라임' , 'https://user-images.githubusercontent.com/63364990/144431460-250ee8df-8771-4fde-88e0-bb030f170180.png' , 18000, null, null),
    (15, '한라  스위트 키위' , 'https://user-images.githubusercontent.com/63364990/144431467-2961340a-8e40-485a-b483-0477fb5b4f5c.png', 20000, null, null);
    



/* DELETE FROM Customer Where cno = 1 ;*/ 