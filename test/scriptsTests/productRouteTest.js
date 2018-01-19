import { app } from '../app';
import Client from '../models/product';
import utils from '../utils/crypto';
import { successResult, errorResult } from '../utils/constants';

describe('Product Routes', () => {
  const defaultClient = {
    name: 'A280C Blaster Rifle',
    unitPrice: 45.000,
    multiple: 1,
  };

  app.post(`${urlBase}/create`, (req, res) => {
    if (!req.body) return;
    const dataItem = new Client.model(req.body);
    dataItem.save((err, result) => {
      if (err) { res.json(errorResult(err.Message)); }

      res.json(successResult(result));
    });
  });

  app.put(`${urlBase}/update`, (req, res) => {
    if (!req.body) return;
    const dataItem = new Client.model(req.body);
    Client.model.findOneAndUpdate(
      { name: dataItem.name }
      , dataItem
      , { new: true }
      , (err, clientResult) => {
        if (err) { res.json(errorResult(err.Message)); }

        res.json(successResult(result));
      },
    );
  });

  app.delete(`${urlBase}/remove/`, (req, res) => {
    if (!req.query) return;
    Client.model.findOneAndRemove(
      req.query
      , (err, clientResult) => {
        if (err) { res.sendStatus(412); }

        res.sendStatus(204);
      },
    );
  });
});
