import MongooseModel from 'mongoose-model-class';

class User extends MongooseModel {
  schema() {
    return {
      firstName: { type: String, require: true },
      lastName: { type: String, require: true },
      email: { type: String, require: true, index: true },
      phone: { type: String, require: true, index: true },
      username: { type: String, require: true, index: true },
      password: { type: String, require: true },
      status: { type: Boolean, default: true },
    };
  }

  get fullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullname(value) {
    const fName = value.split(' ');
    this.firstName = fName[0];
    this.lastName = fName[1];
  }

  static get(query) {
    const criteria = {};
    return this.find(criteria);
  }

  static async getById(id) {
    const user = await this.findById(id);
    if (!user) {
      throw new Error('User not found.');
    }
    return user;
  }

  static async updateById(id, data) {
    await this.getById(id);
    const criteria = { _id: id };
    return this.update(criteria, { $set: data });
  }

  static async deleteById(id) {
    await this.getById(id);
    const criteria = { _id: id };
    return this.remove(criteria);
  }

  disable() {
    return this.model('User').updateById(this.id, { status: false });
  }

  options() {
    return {
      versionKey: false,
    }
  }

  config(schema) {
    schema.index({ firstName: 1, lastName: 1 });
    schema.index({ '$**': 'text' });
  }

}

module.exports = User;
