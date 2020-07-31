const bcrypt = require("bcryptjs");

module.exports = {
    register: async (req, res) => {
        const {membership_number, email, password} = req.body;
        const db = req.app.get('db');

        const memberExists = await db.members.check_member({membership_number});
        if(memberExists[0]){
            return res.status(400).send('The membership number you entered is already in use')
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

        const newMember = await db.members.register_member({membership_number, email, password: hash});
        req.session.members = newMember[0];
        res.status(201).send(req.session.members);
    },

    login: async(req, res) => {
        const {membership_number, password} = req.body;
        const db = req.app.get('db');

        const memberExists = await db.members.check_member({membership_number});
        if(!memberExists[0]){
            return res.status(400).send('Membership number not found');
        }

        const authenticated = bcrypt.compareSync(password, memberExists[0].password);
        if(!authenticated){
            return res.status(401).send('Password is incorrect. Try again.');
        }

        delete memberExists[0].password;
        req.session.members = memberExists[0];
        res.status(202).send(req.session.members);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },

    members: (req, res) => {
        if (req.session.members) {
            res.status(200).send(req.session.members);
        } else {
            res.status(401).send("Please log in");
        }
    }
}