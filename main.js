var http = require("http");
var fs = require("fs");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var myURL = new URL('http://localhost:3000' + _url);
  var queryData = myURL.searchParams.get('id');

  console.log(queryData.id);

  if (_url == "/") {
    _url = "/index.html";
  }

  if (_url == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }

  response.writeHead(200);
  response.end(queryData.id);
  // response.end(fs.readFileSync(__dirname + _url));
});

// 포트
app.listen(3000);
