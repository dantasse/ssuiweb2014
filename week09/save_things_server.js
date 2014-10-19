var http = require('http');
var fs = require('fs');
var url = require('url');

// If you request /save?hello, it will save "hello" in test.txt.
var handler = function (req, res) {
  var parsedUrl = url.parse(req.url);
  if (req.method === 'GET' && parsedUrl.pathname === '/save') {
    fs.writeFile("test.txt", parsedUrl.query, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    }); 
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
};

http.createServer(handler).listen(8000);
console.log('Server running at http://localhost:8000/');

