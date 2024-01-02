// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Create event handlers for comments
const events = [];

// Handle events
app.post('/events', (req, res) => {
    const event = req.body;
    events.push(event);

    // Post event to other services
    axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://localhost:4002/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://localhost:4003/events', event).catch((err) => {
        console.log(err.message);
    });

    res.send({ status: 'OK' });
});

// Get all events
app.get('/events', (req, res) => {
    res.send(events);
});

// Start server
app.listen(4005, () => {
    console.log('Listening on 4005');
});