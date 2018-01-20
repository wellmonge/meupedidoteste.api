import Client from '../models/client';
import clientSeed from '../seeds/client';
import { successResult, errorResult } from '../utils/constants';

// const urlBase = "/api/client";
const urlBase = '/client';

module.exports = (app) => {
  app.get(`${urlBase}/seed`, (req, res) => {
    Client.model.insertMany(clientSeed, (err, result) => {
      if (err) { res.json(err); }
      res.json(result);
    });
  });

  app.post(`${urlBase}/create`, (req, res) => {
    if (!req.body) return;
    const dataItem = new Client.model(req.body);
    dataItem.save((err, clientResult) => {
      if (err) { res.json(errorResult(err.Message)); }

      res.json(successResult(clientResult));
    });
  });

  app.put(`${urlBase}/update`, (req, res) => {
    if (!req.body) return;

    let updating = {};
    updating = Object.assign(updating, req.body);
    updating.name = req.body.name;
    delete updating._id;

    Client.model.findOneAndUpdate(
      { name: req.body.oldName }
      , updating
      , {
        new: true,
      }
      , (err, clientResult) => {
        if (err) { res.json(errorResult(err.Message)); }

        res.json(successResult(clientResult));
      },
    );
  });

  app.delete(`${urlBase}/remove`, (req, res) => {
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
