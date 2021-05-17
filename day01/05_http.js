var http = require('http');
var opn = require('opn');
var url = '127.0.0.1';
var port = 3000
http.createServer((req, res)=>{
    res.end('hello world');
}).listen(port,url);
opn(url+':'+port,{app:'chrome'});