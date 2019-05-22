const http = require('http');
const events = require('events');
const url = require('url');

var eventEmitter = new events.EventEmitter();

var server = http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    console.log('pathname', pathname)
    res.writeHead(200, ('Content Type', 'text/html'));
    eventEmitter.emit('someone Requested', 'true');
    res.end('Server Works!!!')
});

eventEmitter.on('someone Requested', (data) => {
    console.log('event going listener', data)
})


server.listen(3000, 'localhost', () => {
    console.log('server started at port 3000')
})
