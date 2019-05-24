const Joi = require('@hapi/joi');
const MyModel = require('./../../src/models/MyModel.js');
const MyModelDao = require('./../../src/dao/MyModel.js');
const MyModelController = require('./../../src/controllers/MyModel.js');
const Faker = require('faker');
const sinon = require('sinon');
const sinonTest = require('sinon-test');
sinon.test = sinonTest.configureTest(sinon);

beforeAll(async () => {
  // setup before each test
});

describe('Test availability of private methods to unit tests', () => {
  test('example private method should be available', async () => {
    const privateMethodReturnValue = MyModelController._private_.examplePrivateMethod();
    expect(privateMethodReturnValue).toBe(true);
  });

});

describe('Test basic CRUD-like operations', () => {
  test('It should create a MyModel instance', sinon.test(async () => {
    const id = Faker.random.number();
    const description = Faker.lorem.sentence();
    sinon.stub(MyModelDao, 'create').returns({ id, description });
    const myModelInstance = await MyModelController.create({
      description,
    });
    expect(Joi.validate(myModelInstance, MyModel).error).toBe(null);
    expect(myModelInstance.description).toEqual(description);
  }));

  test('It should find a MyModel instance', sinon.test(async () => {
    const id = Faker.random.number();
    const description = Faker.lorem.sentence();
    sinon.stub(MyModelDao, 'findById').returns({id, description});
    const myModelInstance = await MyModelController.findById(id);
    expect(Joi.validate(myModelInstance, MyModel).error).toBe(null);
    expect(myModelInstance.id).toEqual(id);
    expect(myModelInstance.description).toEqual(description);
  }));

});
