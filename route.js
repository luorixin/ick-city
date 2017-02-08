function route(handle,pathname,res){
	console.log("About to route a request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](res);
		
	}else{
		res.write("404 Not Found");
		res.end();
	}
}
exports.route=route;