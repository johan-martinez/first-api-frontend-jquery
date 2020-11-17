const express = require('express')
const cors = require('cors')
var app = express()
const port = 9000;

app.use(express.json())
app.use(cors())

var listEmployees = [
    {  name: 'Pepe Perez', city: 'Tunja' },
    {  name: 'Andrea Sanchez', city: 'Bogotá' },
    {  name: 'Sebastián Rojas', city: 'Bogota' }
];


app.get('/', (req, res) => {
    res.send(listEmployees);
});

app.post('/', (req, res) => {
    console.log('post')
    console.log(req.body)
    listEmployees.push(req.body);
    res.send(listEmployees);
});

app.listen(port, () => {
    console.log(`RUNNING ON PORT ${port}`)
});