"use strict";
exports.__esModule = true;
exports.ChatServer = void 0;
var http = require("http");
var ChatServer = /** @class */ (function () {
    function ChatServer() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }
    ChatServer.prototype.createApp = function () {
        this.app = require('cors');
        var cors = require('cors');
        this.app = cors();
        this.app = require('express');
    };
    ChatServer.prototype.createServer = function () {
        this.server = http.createServer(this.app);
    };
    ChatServer.prototype.config = function () {
        this.port = process.env.PORT || ChatServer.PORT;
    };
    ChatServer.prototype.sockets = function () {
        this.io = require("socket.io").listen(this.server, { origins: '*:*' });
    };
    ChatServer.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log("Running server on port %s", _this.port);
        });
        this.io.on("connect", function (socket) {
            console.log("Connected client on port %s.", _this.port);
            socket.on("message", function (m) {
                console.log("[server](message): %s", JSON.stringify(m));
                _this.io.emit("message", m);
            });
            socket.on("disconnect", function () {
                console.log("Client disconnected");
            });
        });
    };
    ChatServer.prototype.getApp = function () {
        return this.app;
    };
    ChatServer.PORT = 8080;
    return ChatServer;
}());
exports.ChatServer = ChatServer;
