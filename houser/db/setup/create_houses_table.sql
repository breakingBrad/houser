CREATE TABLE "houses" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  address VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(2),
  zip INTEGER,
);