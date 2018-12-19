use w5s7t3uky0jc219r;

DROP TABLE assets;
DROP TABLE catelog;
DROP TABLE sites;
DROP TABLE users;

CREATE TABLE users (
  uuid INTEGER NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(20),
  lastname VARCHAR(20),
  issitemgr BOOLEAN DEFAULT false,
  isadmin BOOLEAN DEFAULT false,
  email VARCHAR(255),
  uid VARCHAR(255),
  PRIMARY KEY (uuid)
);

CREATE TABLE catelog (
  catelogid NUMERIC(7,0) NOT NULL,
  catelogname VARCHAR(20),
  model VARCHAR(50),
  brand VARCHAR(50),
  cost DECIMAL(64, 2),
  catelogdescription VARCHAR(255),
  PRIMARY KEY (catelogid)
);

CREATE TABLE sites (
  siteid INTEGER NOT NULL AUTO_INCREMENT,
  siteaddress VARCHAR(255),
  serviceSLA VARCHAR(50),
  uuid INTEGER,
  PRIMARY KEY (siteid),
  FOREIGN KEY (uuid) REFERENCES users(uuid)
);

CREATE TABLE assets (
  serialno VARCHAR(255) NOT NULL,
  siteid INTEGER,
  catelogid NUMERIC(7,0),
  uuid INTEGER,
  assetdescription VARCHAR(255),
  assetcost NUMERIC (10,2) NOT NULL,
  PRIMARY KEY (serialno),
  FOREIGN KEY (uuid) REFERENCES users(uuid),
  FOREIGN KEY (siteid) REFERENCES sites(siteid),
  FOREIGN KEY (catelogid) REFERENCES catelog(catelogid)
);

