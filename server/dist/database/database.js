'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pg = require('pg');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var pool = new _pg.Pool();

/*
* For this this work, I've created a .env file and assigned values
* to properties like PGHOST, PGPORT, PGUSER, PGPASSWORD, and PGDATABASE
* I've also installed dotenv and called dotenv.config(); when the
* server is starting up. dotenv.config(); ensures the properties
* defined in the .env file are available to the app as it runs
*/
var connect = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', pool.connect());

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function connect() {
    return _ref.apply(this, arguments);
  };
}();

var execute = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sql) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var connection;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return connect();

          case 2:
            connection = _context2.sent;
            _context2.prev = 3;
            _context2.next = 6;
            return connection.query(sql, data);

          case 6:
            return _context2.abrupt('return', _context2.sent);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](3);

            console.log(_context2.t0.message);

          case 12:
            _context2.prev = 12;

            connection.release();
            return _context2.finish(12);

          case 15:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[3, 9, 12, 15]]);
  }));

  return function execute(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = execute;