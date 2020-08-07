const { decodeBase64 } = require('bcryptjs');

const {SECRET_KEY} = process.env;
const stripe = require('stripe')(SECRET_KEY);

module.exports = {
    completePayment: (req, res) => {
        const {token, amount} = req.body;
        const db = req.app.get('db');

        const charge = stripe.charges.create({
            amount,
            currency: 'usd',
            source: token.id,
            description: 'Test Charge'
        },
        function(err, charge) {
            if (err) {
                return res.sendStatus(500);
            } else {
                console.log('Payment Complete', charge)
                const {member_id} = req.session.members;
                const payment_date = JSON.stringify(new Date());

                db.membership.createMembershipPayment({member_id, amount, payment_date}) 

                return res.status(200).send(charge)
            }
        })
    }
}