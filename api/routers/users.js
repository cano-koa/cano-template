import Router from 'koa-router';
const router = new Router({ prefix: '/users' });
const { UserController } = cano.app.controllers;

router.post('/', UserController.create);
router.get('/', UserController.get);
router.put('/:id', UserController.update);

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
