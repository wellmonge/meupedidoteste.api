import app from '../app';
import User from "../models/user";
import { utils } from "../utils/crypto";
import { SUCCESS_MESSAGE, ERROR_MESSAGE } from '../utils/constants';
import fs from "fs";
import user from "../models/user";
const [seedPath, unicode] = ['./seeds/users.json', 'utf8'];

//const urlBase = '/api/user/';
const urlBase = '/user';

module.exports = app => {

    app.get(`${urlBase}/seed`, (req, res) => {
        var dataItem = new User.model({
            "username": "meupedidoauth",
            "password": utils.encrypt("meupedidoauth2018")
        });
        User.model.find({ username: dataItem.username }, (err, result) => {
            if (err) res.json(err)
            if (result && result.length != 0) {
                res.json(result);
            } else {
                dataItem.save((err, result) => {
                    if (err)
                         res.json(err);

                    res.json(result);
                });
            }
        })
    });

    app.post(`${urlBase}/create`, (req, res) => {
        if (!req.body) return;
        req.body.password = utils.encrypt(req.body.password);
        var dataItem = new User.model(req.body);
        dataItem.save().then((err) => {
            console.log("salvou")
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

    app.put(`${urlBase}/update`, (req, res) => {
        if (!req.body) return;

        var updatingUser = {};
        updatingUser = Object.assign(updatingUser, req.body);
        delete updatingUser._id;

        User.model.findOneAndUpdate({
            username: updatingUser.username,
            email: updatingUser.email
        }
            , updatingUser
            , { new: true, upsert: false }
            , (err, result) => {
                if (err) {
                    res.json({
                        Success: false,
                        Message: utils.errorMessage,
                        ServerMessage: err.message
                    });
                    return;
                }

                res.json({
                    Success: true,
                    Result: result,
                    Message: utils.successMessage
                });
            });
    });

    app.delete(`${urlBase}/remove`, (req, res) => {
        if (!req.body) return;
        User.model.findOneAndRemove({
            username: req.body.username,
            email: req.body.email
        }, (err, result) => {
            if (err) {
                res.json({
                    Success: false,
                    Message: ERROR_MESSAGE,
                    ServerMessage: err.message
                });
                return;
            }
            res.json({
                Success: true,
                Result: result,
                Message: SUCCESS_MESSAGE
            });
        });
    });

}