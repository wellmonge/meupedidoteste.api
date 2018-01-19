import Client from '../models/client';
import { successResult, errorResult } from '../utils/constants';

// const urlBase = "/api/client";
const urlBase = '/client';

module.exports = (app) => {
  app.post(`${urlBase}/create`, (req, res) => {
    if (!req.body) return;
    const dataItem = new Client.Model(req.body);
    dataItem.save((err, clientResult) => {
      if (err) { res.json(errorResult(err.Message)); }

      res.json(successResult(clientResult));
    });
  });

  app.put(`${urlBase}/update`, (req, res) => {
    if (!req.body) return;
    const dataItem = new Client.Model(req.body);
    Client.model.findOneAndUpdate(
      { name: dataItem.name }
      , dataItem
      , { new: true }
      , (err, clientResult) => {
        if (err) { res.json(errorResult(err.Message)); }

        res.json(successResult(clientResult));
      },
    );
  });

  app.delete(`${urlBase}/remove/`, (req, res) => {
    if (!req.query) return;
    Client.model.findOneAndRemove(
      req.query
      , (err) => {
        if (err) { res.sendStatus(412); }

        res.sendStatus(204);
      },
    );
  });
};
