var route = require("./route");
var handle = require("./requesthandle");
var server = require("./server");

var handlerequest = {};
handlerequest["/"] = handle.start;
handlerequest["/start"] = handle.start;
handlerequest["/end"] = handle.end;
handlerequest["/index"] = handle.index2;

server.start(route.route,handlerequest);