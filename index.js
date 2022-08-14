//Dependencies
const express = require('express');
const app = express();
app.use(express.json());

//Handling Get request for / URI
app.get('/', (req, res) => {
    //log the request
    console.log(req);
    res.send('Express App Running');
});

//get server time
app.get('/time', (req, res) => {
    res.send(new Date().toString());
});



//handling url parameters
app.get('/sendValue', function (req, res) {
    const sensorReading = req.query.temp;
    if (sensorReading) {
        //UpdateDB(sensorReading)
        res.send("Sensor reading = " + sensorReading);
    }
    else {
        res.send("Temp query parameter is not set in request");
    }
});

//handling post json data
app.post('/sendValue', function (req, res) {
    const sensorReading = req.body.temp;
    if (sensorReading) {
        //UpdateDB(sensorReading)
        res.send("Sensor reading = " + sensorReading);
    }
    else {
        res.send("Temp query parameter is not set in request");
    }
});


//Deploying the listener
const port =  process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server listening on port ${port}`));