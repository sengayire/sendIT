'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../controllers/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usersRouter = _express2.default.Router();

// users routes
usersRouter.post('/', _users2.default.createUser);
usersRouter.get('/', _users2.default.getAllUsers);
usersRouter.get('/:id', _users2.default.getOneUser);

exports.default = usersRouter;