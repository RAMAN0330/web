var http = require('http')
for (var i = 10000; i <= 20000; i++) {
    http.createServer(function (request, response) {
        response.writeHeader(200, { "contentType": "text/html" });
        response.write("Hello world, This is my Node.js server , welcome \n Node.js files must be initiated in the Command Line Interface program of your computer.\nHow to open the command line interface on your computer depends on the operating system. For Windows users, press the start button and look for Command Prompt, or simply write cmd in the search field.");
        response.end();
    }).listen(i.toString());
}