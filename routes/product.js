
import Product from '../models/product';
import { successResult, errorResult } from '../utils/constants';
import productsSeed from '../seeds/product';

// const urlBase = "/api/Product";
const urlBase = '/Product';

module.exports = (app) => {
  app.get(`${urlBase}/seed`, (req, res) => {
    Product.model.insertMany(productsSeed, (err, result) => {
      if (err) { res.json(err); }
      res.json(result);
    });
  });

  app.post(`${urlBase}/create`, (req, res) => {
    if (!req.body) return;

    const dataItem = new Product.model(req.body);

    dataItem.save((err, productResult) => {
      if (err) { res.json(errorResult(err.Message)); }

      res.json(successResult(productResult));
    });
  });

  app.put(`${urlBase}/update`, (req, res) => {
    if (!req.body) return;

    let updating = {};
    updating = Object.assign(updating, req.body);
    updating.name = 'teste3';
    delete updating._id;

    Product.model.findOneAndUpdate(
      { name: updating.name }
      , updating
      , {
        new: false,
      }
      , (err, productResult) => {
        if (err) {
          res.json(errorResult(err.Message));
        }

        res.json(successResult(productResult));
      },

    );
  });

  app.delete(`${urlBase}/remove/`, (req, res) => {
    if (!req.query) return;

    Product.model.findOneAndRemove(
      req.query
      , (err) => {
        if (err) { res.sendStatus(412); }
        res.sendStatus(204);
      },
    );
  });
};
