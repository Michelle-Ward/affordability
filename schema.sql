DROP DATABASE IF EXISTS mortgage_payments;

CREATE DATABASE mortgage_payments;

USE mortgage_payments;

CREATE TABLE payments (
  id NOT NULL PRIMARY KEY AUTO_INCREMENT,
  home_price INT NOT NULL,
  down_payment INT NOT NULL,
  interest_rate INT NOT NULL,
  hoa BIT
)