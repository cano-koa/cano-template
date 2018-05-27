import Router from 'koa-router';
const router = new Router({ prefix: '/users' });
const { UserController } = cano.app.controllers;
const { Auth } = cano.app.policies;

router.post('/', Auth.apikey, UserController.create);
router.get('/', Auth.apikey, UserController.get);
router.put('/:id', Auth.apikey, UserController.update);

/* router.post('/', ctx => {
  console.log('Here post!');
  ctx.res.body = 'post';
});
router.get('/',  ctx => {
  console.log('Here get!');
  ctx.res.body = 'get';
});
router.put('/:id/',  ctx => {
  console.log('Here put!');
  ctx.res.body = 'put';
}); */

module.exports = router
