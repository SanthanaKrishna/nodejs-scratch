const http = require('http');
const fs = require('fs');



var server = http.createServer((req, res) => {
    console.log('requested url' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    } else if (req.url === '/api/data') {
        var myObj = {
            name: 'sk',
            age: 22,
            job: 'Full stack Developer'
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(myObj))
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+ '/404.html').pipe(res)
    }
})

server.listen(3000, 'localhost', () => {
    console.log('server started at port 3000')
})
