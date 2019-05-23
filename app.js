const http = require('http');
const events = require('events');
const url = require('url');

var eventEmitter = new events.EventEmitter();

var server = http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    console.log('pathname', pathname)
    res.writeHead(200, ('Content Type', 'text/html'));
    eventEmitter.emit('someone Requested', 'true');
    res.write('Hello World!');
    res.end('Server Works!!!')
});

eventEmitter.on('someone Requested', (data) => {
    console.log('event going listener', data)
})

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);
/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);



server.listen(3000, 'localhost', () => {
    console.log('server started at port 3000')
})
