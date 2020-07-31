UPDATE tee_times
SET what_time = ${what_time}
SET what_day = ${what_day}
SET number_of_golfers = ${number_of_golfers}
WHERE tee_time_id = ${tee_time_id};

SELECT tee_time_id, what_time, what_day, number_of_golfers FROM tee_times
WHERE tee_time_id = ${tee_time_id};