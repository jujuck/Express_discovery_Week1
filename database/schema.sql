DROP TABLE IF EXISTS peoples ;
CREATE TABLE peoples (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  age INTEGER,
  isGraduate INTEGER,
  adress_street VARCAHR(255),
  adress_zipcode INTEGER,
  adress_city VARCHAR(100),
  hobbies_0 VARCHAR(255),
  hobbies_1 VARCHAR(255),
  hobbies_2 VARCHAR(255)
);

INSERT INTO peoples(firstname,lastname,age,hobbies_0,hobbies_1,hobbies_2,isGraduate,adress_street,adress_zipcode,adress_city) VALUES ('Marc','Philippe',42,'Foot','Basket','Food','false','Une rue parmis d''autres',12345,'Paris');
INSERT INTO peoples(firstname,lastname,age,hobbies_0,hobbies_1,hobbies_2,isGraduate,adress_street,adress_zipcode,adress_city) VALUES ('Bob','Martin',35,'Guitar','Books',NULL,'true','Une autre rue parmis d''autres',12345,'Paris BIS');
INSERT INTO peoples(firstname,lastname,age,hobbies_0,hobbies_1,hobbies_2,isGraduate,adress_street,adress_zipcode,adress_city) VALUES ('Pierre','Michel',35,'Guitar','Books',NULL,'true','Une autre rue parmis d''autres',12345,'Paris BIS');
INSERT INTO peoples(firstname,lastname,age,hobbies_0,hobbies_1,hobbies_2,isGraduate,adress_street,adress_zipcode,adress_city) VALUES ('Philippe','Zinclair',35,'Guitar','Books',NULL,'false','Une autre rue parmis d''autres',12345,'Paris BIS');
