UPDATE tee_times
SET (what_time, what_day, number_of_golfers) = (${what_time}, ${what_day}, ${number_of_golfers})
WHERE tee_time_id = ${id};

SELECT tee_time_id, what_time, what_day, number_of_golfers FROM tee_times
WHERE tee_time_id = ${id};
