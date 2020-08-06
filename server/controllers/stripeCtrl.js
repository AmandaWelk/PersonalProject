const {SECRET_KEY} = process.env;
const stripe = require('stripe')(SECRET_KEY);

module.exports = {
    completePayment: (req, res) => {
        const {token, amount} = req.body;

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
                return res.status(200).send(charge)
            }
        })
    }
}