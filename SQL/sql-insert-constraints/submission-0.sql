CREATE TYPE status AS ENUM ('active', 'inactive', 'pending');

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER CHECK (age >= 18),
    status status
);
-- Do not modify above this line --


INSERT INTO users (id, age, status) 
    VALUES (1, 20, 'active');

INSERT INTO users (id, name, age, status) 
    VALUES (1, 'Jane Doe', 27, 'pending');

INSERT INTO users (id, name, age, status) 
    VALUES (3, 'John Smith', 17, 'active');

INSERT INTO users (id, name, age, status) 
    VALUES (4, 'Jane Smith', 30, 'unknown');


-- Do not modify below this line --
SELECT * FROM users;
