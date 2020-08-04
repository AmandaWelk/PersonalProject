CREATE TABLE IF NOT EXISTS members (
    member_id SERIAL PRIMARY KEY,
    email VARCHAR(250),
    password VARCHAR(250),
    membership_number VARCHAR(100) 
);

CREATE TABLE IF NOT EXISTS tee_times (
    tee_time_id SERIAL PRIMARY KEY,
    member_id INT REFERENCES tee_times(tee_time_id),
    what_day VARCHAR(100),
    what_time VARCHAR(100),
    number_of_golfers INTEGER
);