import { app } from '../app';
import Client from "../models/client";
import utils from "../utils/crypto";
import { successResult, errorResult } from '../utils/constants';

//const urlBase = "/api/client";
const urlBase = "/client";

module.exports = app => {
    app.post(`${urlBase}/create`, (req, res) => {
        if (!req.body) return;
        const dataItem = new Client.model(req.body);
        dataItem.save((err, result) => {
            if (err)
                 res.json(errorResult(err.Message));

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
                if (err)
                    res.json(errorResult(err.Message));

                res.json(successResult(result));
            });
    });

    app.delete(`${urlBase}/remove/`, (req, res) => {
        if (!req.query) return;
        Client.model.findOneAndRemove(
            req.query 
            , (err, clientResult) => {
                if (err)
                    res.json(errorResult(err.Message));

                res.json(successResult(result));
            });
    });

}