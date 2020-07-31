CREATE TABLE IF NOT EXISTS members (
    member_id SERIAL PRIMARY KEY,
    email VARCHAR(250),
    password VARCHAR(250),
    membership_number VARCHAR(100) 
);