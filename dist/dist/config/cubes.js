'use strict';

var _canoCubeControllers = require('cano-cube-controllers');

var _canoCubeControllers2 = _interopRequireDefault(_canoCubeControllers);

var _canoCubeServices = require('cano-cube-services');

var _canoCubeServices2 = _interopRequireDefault(_canoCubeServices);

var _canoCubePolicies = require('cano-cube-policies');

var _canoCubePolicies2 = _interopRequireDefault(_canoCubePolicies);

var _canoCubeRouters = require('cano-cube-routers');

var _canoCubeRouters2 = _interopRequireDefault(_canoCubeRouters);

var _canoCubeMongoose = require('cano-cube-mongoose');

var _canoCubeMongoose2 = _interopRequireDefault(_canoCubeMongoose);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = [_canoCubeMongoose2.default, _canoCubeServices2.default, _canoCubeControllers2.default, _canoCubePolicies2.default, _canoCubeRouters2.default];