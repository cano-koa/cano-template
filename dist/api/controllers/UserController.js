'use strict';

const { MessageService } = cano.app.services;

const { User } = cano.app.models;

class UserController {

  async create({ request, response }) {
    const { body } = request;
    cano.log.info('UserController.create.body', body);
    const user = await User.create(body);
    cano.log.info(MessageService.create());
    response.status = 201;
    response.body = user;
  }

  async get({ request, response }) {
    const { query } = request;
    cano.log.info('UserController.get.query', query);
    cano.log.info(MessageService.get());
    response.status = 200;
    response.body = query;
  }

  async update({ request, response }) {
    const { body, params } = request;
    cano.log.info('UserController.update.params', params);
    cano.log.info('UserController.update.body', body);
    cano.log.info(MessageService.update());
    response.status(204);
  }

}

module.exports = UserController;