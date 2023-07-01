var http = require('http');

http.createServer(function (req, res) { //request, response
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('Hello World!');
}).listen(8080);