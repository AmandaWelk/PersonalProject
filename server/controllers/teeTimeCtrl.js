module.exports = {
    createTeeTime: (req, res) => {
        const {id, what_day, what_time, number_of_golfers} = req.body;
        const db = req.app.get('db');

        db.tee_times.createTeeTime(id, what_day, what_time, number_of_golfers)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },

    getMemberTeeTimes: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');

        db.tee_times.getMemberTeeTimes(id)
        .then(tee_times => res.status(200).send(tee_times))
        .catch(err => res.status(500).send(err));
    },

    editTeeTime: (req, res) => {
        const {id} = req.params;
        const {what_day, what_time, number_of_golfers} = req.body;
        const db = req.app.get('db');

        db.tee_times.editTeeTime(what_day, what_time, number_of_golfers, id)
        .then(tee_times => res.status(200).send(tee_times))
        .catch(err => console.log(err));
    },

    deleteTeeTime: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db');

        db.tee_times.deleteTeeTime(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    }
}
