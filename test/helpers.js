import supertest from 'supertest';
import chai from 'chai';
import app from '.././app';

export const supertes = app;
export const request = supertest(app);
export const expect = chai.expect;
