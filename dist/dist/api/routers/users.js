'use strict';

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const router = new _koaRouter2.default({ prefix: '/users' });
const { UserController } = cano.app.controllers;
const { Auth } = cano.app.policies;

router.post('/', Auth.apikey, UserController.create);
router.get('/', Auth.apikey, UserController.get);
router.put('/:id', Auth.apikey, UserController.update);

module.exports = router;