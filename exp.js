const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');

var app = express();
//var server = http.createServer(app);

var urlencodedParser = bodyParser.urlencoded({ extended: false })
//ejs view engine
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send('<h1>Express Startes!</h1>')
})

app.get('/task', (req, res) => {
    fs.readFile('./db.json', (err, data) => {
        var tasks = JSON.parse(data.toString()).tasks;
        res.send(tasks)
    })
    //res.send('<h2>check router<h3/>')
})

app.get('/username/:name', (req, res) => {
    res.send('you requested to a profile of  ' + req.params.name)
})

app.get('/file', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//query sting course
app.get('/learnqs', (req, res) => {
    console.log(req.query)
    res.render('query', { qs: req.query })
})

app.post('/learnqs', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.render('query-sucess', { data:  req.body })
})

app.get('/profile/:name', (req, res) => {
    var myObj = {
        name: 'sk',
        age: 22,
        job: 'Full stack Developer',
        tasks: [
            "learn NodeJs",
            "learn Express",
            "full stack develop"
        ]
    };
    console.log(req.query);
    res.render('profile', { person: req.params.name, data: myObj })
})
//ejs concept :Embedded JavaScript templates
//server.listen(3000);



app.listen(3000, () => {
    console.log('server started at the port 3000');
})