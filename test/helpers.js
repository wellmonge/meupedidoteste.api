import { SuperTest } from 'supertest';
import chai from 'chai';
import app from '.././app';

const request = SuperTest(app);
const { expect } = chai;


export {
  request,
  expect,
};
