module.exports = {
    createTeeTime: (req, res) => {
        const {id, what_day, what_time, number_of_golfers} = req.body;
        const db = req.app.get('db');

        db.post.create_tee_time(id, what_day, what_time, number_of_golfers)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },

    getMemberTeeTimes: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');

        db.post.get_member_tee_times(id)
        .then(tee_times => res.status(200).send(tee_times))
        .catch(err => res.status(500).send(err));
    },

    editTeeTime: (req, res) => {
        const {id} = req.params;
        const {what_day, what_time, number_of_golfers} = req.body;
        const db = req.app.get('db');

        db.tee_times.edit_tee_time(what_day, what_time, number_of_golfers, id)
        .then(tee_times => res.status(200).send(tee_times))
        .catch(err => console.log(err));
    },

    deleteTeeTime: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');

        db.post.delete_tee_time(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    }
}
