import Router from 'koa-router';
const router = new Router({ prefix: '/users' });
const { UserController } = cano.app.controllers;
const { Auth } = cano.app.policies;

router.post('/', Auth.apikey, UserController.create);
router.get('/', Auth.apikey, UserController.get);
router.get('/:id', Auth.apikey, UserController.getById);
router.put('/:id', Auth.apikey, UserController.updateById);
router.delete('/:id', Auth.apikey, UserController.deleteById);

module.exports = router
