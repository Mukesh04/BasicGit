/**
 * Created by dhanalakshmi on 18/7/17.
 */
var http = require('http');
var dt = require('./module');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var p= url.parse(req.url, true).query;
    var txt = p.year+" "+p.month;

    res.write(dt.myDate());
    // res.end('Hello World !');
    res.end(txt);
    // res.write(req.url);
}).listen(8080);
