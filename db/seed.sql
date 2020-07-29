CREATE TABLE IF NOT EXISTS members (
    member_id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(50),
    membership_number INTEGER NOT NULL 
);