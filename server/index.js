require("dotenv").config();
const express = require("express");
const massive = require("massive");
const authCtrl = require("./controllers/authCtrl");
const teeTimeCtrl = require("./controllers/teeTimeCtrl");

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then(db => {
        app.set("db", db);
        console.log("db connected");
    })
    .catch(err => console.log(err));

app.use(express.json());

//auth endpoints
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);

//teeTime endpoints

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
});