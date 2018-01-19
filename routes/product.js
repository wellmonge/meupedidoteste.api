
import Product from '../models/product';
import { successResult, errorResult } from '../utils/constants';

const productsSeed = require('../seeds/product');

// const urlBase = "/api/Product";
const urlBase = '/Product';

module.exports = (app) => {
  app.get(`${urlBase}/seed`, (req, res) => {
    productsSeed.products.forEach((element) => {
      const dataItem = new Product.Model(element);
      Product.model.find({ name: dataItem.name }, (errFind, resultFind) => {
        if (errFind) res.json(errFind);
        if (resultFind && resultFind.length !== 0) {
          res.json(resultFind);
        } else {
          dataItem.save((err, result) => {
            if (err) { res.json(err); }

            res.json(result);
          });
        }
      });
    });
  });

  app.post(`${urlBase}/create`, (req, res) => {
    if (!req.body) return;
    const dataItem = new Product.Model(req.body);
    dataItem.save((err, result) => {
      if (err) { res.json(errorResult(err.Message)); }

      res.json(successResult(result));
    });
  });

  app.put(`${urlBase}/update`, (req, res) => {
    if (!req.body) return;
    const dataItem = new Product.Model(req.body);
    Product.model.findOneAndUpdate(
      { name: dataItem.name }
      , dataItem
      , { new: true }
      , (err, productResult) => {
        if (err) { res.json(errorResult(err.Message)); }

        res.json(successResult(productResult));
      },
    );
  });

  app.delete(`${urlBase}/remove/`, (req, res) => {
    if (!req.query) return;
    Product.model.findOneAndRemove(
      req.query
      , (err, productResult) => {
        if (err) { res.json(errorResult(err.Message)); }

        res.json(successResult(productResult));
      },
    );
  });
};
