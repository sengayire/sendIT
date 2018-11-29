'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcels = require('../controllers/parcels');

var _parcels2 = _interopRequireDefault(_parcels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parcelsRouter = _express2.default.Router();

// parcels routes
parcelsRouter.post('/', _parcels2.default.createParcel);
parcelsRouter.get('/:id', _parcels2.default.getOneParcel);
parcelsRouter.put('/:id/update', _parcels2.default.updateParcel);
parcelsRouter.get('/', _parcels2.default.getAllParcels);
parcelsRouter.put('/:id/cancel', _parcels2.default.cancelParcel);
parcelsRouter.delete('/:id/delete', _parcels2.default.deleteParcel);
parcelsRouter.get('/user/:id', _parcels2.default.getAllParcelUser);
exports.default = parcelsRouter;