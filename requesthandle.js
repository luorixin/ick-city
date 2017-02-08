var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");

  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}
function index2(response){
	 console.log("Request handler 'index' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.sendfile("city.html");
	response.end();
}

exports.start = start;
exports.upload = upload;
exports.index2 = index2;