const express = require('express');
let app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

app.get('/api/headerlist', function (req, res) {
    res.end(JSON.stringify({
        msg: 'fefefe'
    }));
});

app.listen(3001, function (req, res) {
    console.log(`server runs`);
});