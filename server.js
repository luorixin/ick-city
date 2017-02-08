var httpServer = require('http');
var url = require("url");

function start(route,handle){
	function onRequest(req,res){
		var pathname = url.parse(req.url).pathname;
		res.writeHead(200,{"content-Type":"text-plain"});
		route(handle,pathname,res);

	}

	httpServer.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;
