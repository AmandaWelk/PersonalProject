module.exports = {
    getMemberships: (req, res) => {
        const {member_id} = req.session.members;
        const db = req.app.get('db');

        db.membership.getMembershipInfo(member_id)
            .then(response => {
                res.status(200).send(response)
            })
            .catch(err => {
                console.log(err)
                res.sendStatus(500)
            })
    }
}