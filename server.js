var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(8080, function () {
    console.log('Server running on 8080...');
});

var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch([__dirname + "/public", __dirname + "/js", __dirname + "/css", __dirname + "/*.*"]);