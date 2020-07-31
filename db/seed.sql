CREATE TABLE IF NOT EXISTS members (
    member_id SERIAL PRIMARY KEY,
    email VARCHAR(250),
    password VARCHAR(250),
    membership_number VARCHAR(100) 
);

CREATE TABLE IF NOT EXISTS tee_times (
    tee_time_id SERIAL PRIMARY KEY,
    member_id INT REFERENCES tee_times(tee_time_id),
    what_day DATE,
    what_time TIME,
    number_of_golfers INTEGER
);