'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

var _celebrate = require('celebrate');

var _parcels = require('../data/parcels');

var _parcels2 = _interopRequireDefault(_parcels);

var _users = require('../data/users');

var _users2 = _interopRequireDefault(_users);

var _parcelsqueries = require('../database/parcelsqueries');

var _parcelsqueries2 = _interopRequireDefault(_parcelsqueries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParcelsController = function () {
  function ParcelsController() {
    _classCallCheck(this, ParcelsController);
  }

  _createClass(ParcelsController, null, [{
    key: 'createParcel',

    // create a parcel
    value: function createParcel(req, res) {
      (0, _celebrate.celebrate)({
        body: _celebrate.Joi.object().keys({
          origin: _celebrate.Joi.string().required().trim(),
          destination: _celebrate.Joi.string().required().trim(),
          weight: _celebrate.Joi.number().integer().required()
        })
      });

      var _req$body = req.body,
          id = _req$body.id,
          origin = _req$body.origin,
          destination = _req$body.destination,
          userId = _req$body.userId,
          createdDate = _req$body.createdDate,
          presentLocation = _req$body.presentLocation,
          price = _req$body.price,
          weight = _req$body.weight;


      if (!origin || !destination || !weight) {
        res.status(400).send({ message: 'Please provide all details' });
      }
      var parcel = [id, origin, destination, userId, createdDate, presentLocation, price, weight];
      // parcels.push(parcel);

      _parcelsqueries2.default.insert(parcel);

      res.status(201).send({
        Message: 'Parcel created successfully!',
        Parcel: {
          id: (0, _v2.default)(),
          weight: 23
        }
      });
    }

    // update  a parcel

  }, {
    key: 'updateParcel',
    value: function updateParcel(req, res) {
      var body = req.body;

      if (!body.from || !body.receiver || !body.destination) {
        res.status(404).send({ message: ' details mising!!!' });
      }
      var parcel = {
        destination: body.sender
      };

      _parcels2.default.push(parcel);

      res.status(200).send({
        message: ' details mising!!!',
        parcel: parcel
      });
    }

    // get all available parcels

  }, {
    key: 'getAllParcels',
    value: function getAllParcels(req, res) {
      res.status(200).send(_parcels2.default);
    }

    // getting a single parcel by id

  }, {
    key: 'getOneParcel',
    value: function getOneParcel(req, res) {
      var id = req.params.id;

      var parcel = _parcels2.default.find(function (value) {
        return value.id === id;
      });

      if (!parcel) {
        res.status(404).send({ message: 'Not found!!!' });
      }
      res.status(200).send({
        parcel: parcel
      });
    }

    // get single user's parcels

  }, {
    key: 'getAllParcelUser',
    value: function getAllParcelUser(req, res) {
      var id = req.params.id;

      var parcel = _users2.default.find(function (value) {
        return value.userId === id;
      });

      if (!parcel) {
        res.status(401).send({
          message: 'there is no parcel for this user'
        });
      }
      return res.status(200).send({
        parcel: parcel
      });
    }

    // cancel a parcel

  }, {
    key: 'cancelParcel',
    value: function cancelParcel(req, res) {
      var id = req.params.id;

      var parcel = _parcels2.default.find(function (value) {
        return value.id === id;
      });

      if (!parcel) {
        res.status(404).send({ message: 'Not found!!!' });
      }
      res.status(200).send({
        message: 'parcel canceled successfull',
        parcel: {
          id: 11,
          weight: 10
        }
      });
    }

    // deleting all parcel

  }, {
    key: 'deleteParcel',
    value: function deleteParcel(req, res) {
      res.status(200).send({
        message: ' all parcels has been deleted'
      });
    }
  }]);

  return ParcelsController;
}();

exports.default = ParcelsController;