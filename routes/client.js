import { app } from '../app';
import Client from "../models/client";
import utils from "../utils/crypto";
import { SUCCESS_MESSAGE, ERROR_MESSAGE } from '../utils/constants';
import fs from "fs";
const [seedPath, unicode] = ['./seeds/client.json', 'utf8'];
//const urlBase = "/api/client";
const urlBase = "/client";
module.exports = app => {
    app.post(`${urlBase}/create`, (req, res) => {
        if (!req.body) return;
        const dataItem = new Client.model(req.body);
        const promise = dataItem.save(function (err) {
            if (err) {
                res.json({
                    Success: false,
                    Message: ERROR_MESSAGE
                });
                return;
            }
            res.json({
                Success: true,
                Message: SUCCESS_MESSAGE
            });
        });
    });

    app.put(`${urlBase}/update`, () => {
        if (!req.body) return;
        const dataItem = req.body;
        Client
            .findOneAndUpdate({ name: dataItem.name }
            , dataItem
            , { new: true }
            , (err, clientResult) => {
                if (err) {
                    res.json({
                        Success: false,
                        Message: ERROR_MESSAGE
                    });
                    return;
                }
                res.json({
                    Success: true,
                    Message: SUCCESS_MESSAGE
                });
            });
    });

    app.delete(`${urlBase}/remove`, () => {
        if (!req.body) return;
        const dataItem = req.body;
        Client
            .findOneAndRemove({ name: dataItem.name }
            , (err, clientResult) => {
                if (err) {
                    res.json({
                        Success: false,
                        Message: ERROR_MESSAGE
                    });
                    return;
                }
                res.json({
                    Success: true,
                    Message: SUCCESS_MESSAGE
                });
            });
    });
}