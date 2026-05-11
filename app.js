'use strict';

const express = require('express');
const app = express();

// exercise 1 splendid circles endpoint
app.get('/math/circle/:r', function(req, res) {
    // get the radius from the route parameters
    let r = req.params.r;
    
    // calculate area and circumference
    let area = Math.PI * r * r;
    let circumference = 2 * Math.PI * r;
    
    // send the response as json
    res.json({
        "area": area,
        "circumference": circumference
        });
});

// exercise 2 hello you endpoint
app.get('/hello/name', function(req, res) {
    // get query parameters
    let first = req.query.first;
    let last = req.query.last;

    // check for missing parameters and send error
    if (!first && !last) {
        res.type('text').status(400).send('Missing Required GET parameters: first, last');
    } else if (!first) {
        res.type('text').status(400).send('Missing Required GET parameters: first');
    } else if (!last) {
        res.type('text').status(400).send('Missing Required GET parameters: last');
    } else {
        // send success response
        res.type('text').send('Hello ' + first + ' ' + last);
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);