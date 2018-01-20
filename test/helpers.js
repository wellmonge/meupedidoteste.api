import supertest from 'supertest';
import chai from 'chai';
import app from '../app';

const request = supertest(app);
const { expect } = chai;


export {
  request,
  expect,
};
