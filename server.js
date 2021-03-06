(function () {

    var express = require("express");
    var path = require("path");

    var application = express();

    application.get("/", function (request, response) {
        response.sendFile(path.join(__dirname + "/wwwroot/index.html"));
    });

    application.use(express.static("wwwroot"));
    application.use("/node_modules", express.static(__dirname + "/node_modules"));
    application.use("/bower_components", express.static(__dirname + "/bower_components"));

    var server = application.listen(9999, function () {

        var port = server.address().port;

        console.log("Listening on http://localhost:%s", port);

    });

})();