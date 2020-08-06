require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const authCtrl = require("./controllers/authCtrl");
const teeTimeCtrl = require("./controllers/teeTimeCtrl");
const stripeCtrl = require("./controllers/stripeCtrl");

const app = express();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then(db => {
        app.set("db", db);
        console.log("db connected");
    })
    .catch(err => console.log(err));

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 52
        },
    })
);

app.use(express.json());

//auth endpoints
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);

//teeTime endpoints
app.post('/api/tee_time', teeTimeCtrl.createTeeTime);
app.get('/api/tee_times/:id', teeTimeCtrl.getMemberTeeTimes);
app.put('/api/tee_time/:id', teeTimeCtrl.editTeeTime);
app.delete('/api/tee_time/:id', teeTimeCtrl.deleteTeeTime);

//stripe endpoint
app.post('/api/payment', stripeCtrl.completePayment);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
});