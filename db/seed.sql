CREATE TABLE IF NOT EXISTS members (
    member_id SERIAL PRIMARY KEY,
    email VARCHAR(250),
    password VARCHAR(250),
    membership_number VARCHAR(100) 
);

CREATE TABLE IF NOT EXISTS tee_times (
    tee_time_id SERIAL PRIMARY KEY,
    member_id INT REFERENCES members(member_id),
    what_day VARCHAR(100),
    what_time VARCHAR(100),
    number_of_golfers INTEGER
);

CREATE TABLE IF NOT EXISTS membership (
    membership_id SERIAL PRIMARY KEY,
    member_id INT REFERENCES members(member_id),
    active_membership BOOL,
    amount_paid NUMERIC,
    last_payment_date VARCHAR(50)
);