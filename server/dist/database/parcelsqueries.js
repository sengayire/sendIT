'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

require('dotenv/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var queries = function () {
  function queries() {
    _classCallCheck(this, queries);
  }

  _createClass(queries, null, [{
    key: 'create',

    // creating a parcels table
    value: function create() {
      return (0, _database2.default)('CREATE TABLE IF NOT EXISTS parcels(\n    id UUID PRIMARY KEY,\n    origin VARCHAR(30),\n    destination   VARCHAR(30),\n    user_id VARCHAR(30),\n    created_date DATE,\n    price INT,\n    present_location VARCHAR(20),\n    weight int\n  )');
    }

    // inserting manuely data into database

  }, {
    key: 'insert',
    value: function insert() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      (0, _database2.default)('INSERT INTO parcels (id, origin, destination, user_id, created_date, price, present_location, weight)\n  VALUES($1,$2,$3,$4,$5,$6,$7,$8)', data);
    }

    // retreiving data from database

  }, {
    key: 'select',
    value: function select() {
      (0, _database2.default)('SELECT * FROM parcels ORDER BY id ASC');
    }
  }]);

  return queries;
}();

exports.default = queries;