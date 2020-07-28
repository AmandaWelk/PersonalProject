const bcrypt = require("bcryptjs");

module.exports = {
    register: async (req, res) => {
        const {membershipNumber, email, password} = req.body;
        const db = req.app.get('db');

        const memberExists = await db.members.check_member({email});
        if(memberExists[0]){
            return res.status(400).send('The email you entered is already in use')
        }

        let salt = bcrypt.genSalt(10);
        let hash = bcrypt.hashSync(password, salt);

        const newMember = await db.members.register_member({membershipNumber, email, password: hash});
        req.session.member = newMember[0];
        res.status(201).send(req.session.user);
    },

    login: async(req, res) => {
        const {membershipNumber, password} = req.body;
        const db = req.app.get('db');

        const memberExists = await db.members.check_member({membershipNumber});
        if(!memberExists[0]){
            return res.status(400).send('Membership number not found');
        }

        const authenticated = bcrypt.compareSync(password, memberExists[0].password);
        if(!authenticated){
            return res.status(401).send('Password is incorrect. Try again.');
        }

        delete memberExists[0].password;
        req.session.member = memberExists[0];
        res.status(202).send(req.session.member);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}