INSERT INTO members (email, password, membership_number)
VALUES (${email}, ${password}, ${membership_number})
RETURNING member_id, email, membership_number;