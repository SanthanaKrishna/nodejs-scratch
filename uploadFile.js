var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            var oldpath = files.filetoupload.path;
            console.log('oldpath', oldpath);
            var newpath = 'C:\Users' + files.filetoupload.name;
            console.log('newpath', newpath);
            fs.rename(oldpath, newpath, (err) => {
                if (err) throw err;
                res.write('File Uploaded an moved!')
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }

}).listen(3000);