SELECT ms.active_membership, ms.amount_paid, ms.last_payment_date FROM membership ms
JOIN members m ON ms.member_id = m.member_id
WHERE m.member_id = $1
ORDER BY ms.membership_id DESC
LIMIT 1;