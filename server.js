'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require ('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.

const hash = bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    /*Store hash in your db*/
    return hash;
  });

  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    /*res == true or false*/
    console.log(res);
  });
//END_ASYNC

//START_SYNC

const hash2 = bcrypt.hashSync(myPlaintextPassword, saltRounds);
var result = bcrypt.compareSync(myPlaintextPassword, hash2);
//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
