'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

var _users = require('../data/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersContollers = function () {
  function UsersContollers() {
    _classCallCheck(this, UsersContollers);
  }

  _createClass(UsersContollers, null, [{
    key: 'createUser',

    // creating  new User
    value: function createUser(req, res) {
      var _req$body = req.body,
          name = _req$body.name,
          email = _req$body.email,
          password = _req$body.password;


      if (!name) {
        return res.status(400).send({ message: 'Please provide all details' });
      }
      var user = {
        id: (0, _v2.default)(),
        name: name,
        email: email,
        password: password
      };
      _users2.default.push(user);

      return res.status(201).send({
        message: 'user created successfully',
        user: user
      });
    }

    // get all available user

  }, {
    key: 'getAllUsers',
    value: function getAllUsers(req, res) {
      return res.status(200).send(_users2.default);
    }

    // get a parcel for a single user

  }, {
    key: 'getOneUser',
    value: function getOneUser(req, res) {
      var id = req.params.id;

      var items = _users2.default.find(function (value) {
        return value.id === id;
      });
      res.status(200).send({
        items: items
      });
    }
  }]);

  return UsersContollers;
}();

exports.default = UsersContollers;