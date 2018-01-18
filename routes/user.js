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

    app.get(`${urlBase}/findall`, (req, res) => {
        var dataItem = user.model.find({}, (err, result) => {
            res.json(result);
            console.log(resul)
        });
    });

    app.get(`${urlBase}/seed`, (req, res) => {
        var dataItem = new User.model({
            "username": "meupedidoauth",
            "password": "meupedidoauth2018"
        });
        User.model.find({ username: dataItem.username }, (err, result) => {
            if (result && result.length != 0) {
                console.log("NOT SAVED");
                return res.json(result);
            } else {
                console.log("SAVED");
                dataItem.save((err, result) => {
                    if (err)
                        return res.json(err);

                    return res.json(result);
                });
            }
        })
    });

    app.post(`${urlBase}/create`, (req, res) => {
        if (!req.body) return;
        req.body.password = utils.encrypt(req.body.password);
        var dataItem = User.model(req.body);
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