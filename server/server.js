//==============================================================================
//								Imports
//==============================================================================
const express = require('express');


//==============================================================================
//							Useful variables
//==============================================================================

const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

//==============================================================================
//								Code
//==============================================================================

app.get('/api/display', (req, res) => {
    res.send('Display\n');
    console.log("display");
});

app.get('/api/player', (req, res) => {
    res.send('Player\n');
    console.log("Player");
});


app.get('/api/admin', (req, res) => {
    res.send('Admin\n');
    console.log("Admin");
});

const server = app.listen(8080, function () {
    console.log("Node server listening at http://%s:%s", HOST, PORT)
})

