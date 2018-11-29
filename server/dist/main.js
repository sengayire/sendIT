'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcels = require('./routes/parcels');

var _parcels2 = _interopRequireDefault(_parcels);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use(_express2.default.json());
server.use(_express2.default.urlencoded({ extended: false }));

// fetching parcels
server.use('/api/v1/parcels', _parcels2.default);

// fetching Users
server.use('/api/v1/users', _users2.default);

// assining a port for runing node
var port = 3000;

server.listen(port, function () {
  console.log('Server listening on port: ' + port);
});

exports.default = server;