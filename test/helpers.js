const supertest = require('supertest');

const chai = require('chai');
const app = require('../app');

const request = supertest(app);
const { expect } = chai;

exports = { request, expect };