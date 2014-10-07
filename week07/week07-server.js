var fs = require('fs');

// This is the function that will handle HTTP requests. It just sends back the
// week07.html file.
var handler = function (req, res) {

  // Instead of saying "fs.readFile('week07.html')" and then doing something,
  // we use a callback that will execute when it's done reading the file.
  fs.readFile('week07.html', function (err, data) {
    if (err) {
      res.writeHead(500); // 500 = "server error".
      return res.end('Error loading week07.html');
    }

    // Write back a "200" (OK) code plus the contents of week07.html.
    res.writeHead(200);
    res.end(data);
  });
};

var app = require('http').createServer(handler);
var io = require('socket.io')(app);

app.listen(80);


io.on('connection', function (socket) {
  console.log('got connection');
  socket.emit('hello', 'Hello new connector!'); // important business here :P
  socket.on('response', function (data) {
    console.log(data);
  });
});

console.log('Server running at http://127.0.0.1/');
