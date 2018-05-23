const { MessageService } = cano.app.services;

class UserController {

  async create({ req, res }) {
    const { body } = req;
    cano.log.info('UserController.create.body', body);
    cano.log.info(MessageService.create());
    res.status = 201;
    res.body = body;
  }

  async get({ req, res }) {
    const { query } = req;
    cano.log.info('UserController.get.query', query);
    cano.log.info(MessageService.get());
    res.status = 200;
    res.body = query;
  }

  async update({ req, res }) {
    const { body, params } = req;
    cano.log.info('UserController.update.params', params);
    cano.log.info('UserController.update.body', body);
    cano.log.info(MessageService.update());
    res.status(204);
  }

}

module.exports = UserController;