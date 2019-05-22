const fs = require('fs');
const http = require('http');

/**
 * create floder, create file and add text 
 */
// fs.mkdir('sk_Node', (err) => {
//     if (!err) {
//         fs.writeFile('./sk_Node/hello.txt', 'Welcome to learn node', (err) => {
//             if (!err) {
//                 fs.readFile('./sk_Node/hello.txt', (err, data) => {
//                     if (!err) {
//                         console.log('txt file', data.toString());
//                     }
//                 })
//             }
//         })
//     }
// })


/**
 * delete file, delete floder
 */
// fs.unlink('./sk_Node/hello.txt', function() {
//     fs.rmdir('./sk_Node',(err)=>{
//         if(err){
//             console.log('unable to delete')
//         }
//     });
// })

//--------------------------------------------------------------->
//STREAM
fs.writeFile('./readMe.txt', 'Welcome to learn node', (err) => {
    if (!err) {
        console.log('file created')
    }
})

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')
// //on is to listen
// // myReadStream.on('data', (chunk) => {
// //     console.log('new chunk received:', chunk);
// //     myWriteStream.write(chunk)
// // })    
// myReadStream.pipe(myWriteStream);

//send stream to client
// var server = http.createServer((req, res) => {
//     console.log('requested url' + req.url);
//     res.writeHead(200, { 'Content-Type': 'text/html' }); //'Content-Type': 'text/plain'
//     ///readable stream
//     var myReadStream = fs.createReadStream(__dirname +  '/index.html', 'utf8'); //'/readMe.txt',
//     //on is to listen
//     // myReadStream.on('data', (chunk) => {
//     //     console.log('new chunk received:', chunk);
//     //     myWriteStream.write(chunk)
//     // })    
//     myReadStream.pipe(res);
// })

// server.listen(3000, 'localhost', () => {
//     console.log('server started at port 3000')
// })


//send json 
var server = http.createServer((req, res) => {
    console.log('requested url' + req.url);
    res.writeHead(200, { 'Content-Type': 'application/json' }); //'Content-Type': 'text/plain'
    var myObj={
        name:'sk',
        age:22,
        job:'Full stack Developer'
    };
    res.end(JSON.stringify(myObj));
})

server.listen(3000, 'localhost', () => {
    console.log('server started at port 3000')
})
