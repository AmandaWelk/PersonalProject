SELECT tt.tee_time_id, tt.what_day, tt.what_time, tt.number_of_golfers FROM tee_times tt
JOIN members m ON tt.tee_time_id = m.member_id
WHERE m.member_id = ${m.member_id};