const { MessageService } = cano.app.services;

const { User } = cano.app.models;

class UserController {

  async create({ request, response }) {
    const { body } = request;
    const user = await User.create(body);
    response.status = 201;
    response.body = user;
    MessageService.create(body);
  }

  async get({ request, response }) {
    const { query } = request;
    response.status = 200;
    response.body = await User.get(query);
    MessageService.get(query);
  }

  async getById({ params, response }) {
    const { id } = params;
    response.status = 200;
    response.body = await User.getById(id);
    MessageService.getById(id);
  }

  async updateById({ params, request, response }) {
    const { id } = params;
    const { body } = request;
    await User.updateById(id, body);
    response.status = 204;
    MessageService.updateById(id, body)
  }

  async deleteById({ params, response }) {
    const { id } = params;
    await User.deleteById(id);
    response.status = 204;
    MessageService.deleteById(id);
  }

}

module.exports = UserController;