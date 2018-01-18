import User from "../models/user";
import {utils} from "../utils/crypto";
import { SUCCESS_MESSAGE, ERROR_MESSAGE } from '../utils/constants';
import fs from "fs";
const [ seedPath, unicode ]  = ['./seeds/users.json', 'utf8'];
//const urlBase = '/api/user/';
const urlBase = '/user';

module.exports = (app) => {
    app.post(`${urlBase}/Seed`, (req, res) => {      
    });
    
    app.post(`${urlBase}/create`, (req,res) => {
        
        console.log("1")
        if (!req.body) return;
        req.body.password = utils.encrypt(req.body.password);
        const dataItem = User.model(req.body);
        console.log(dataItem)
        dataItem.save().then((err) => {            
            console.log("2")
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

    app.put(`${urlBase}/update`, (req,res) => { 
        if (!req.body) return;

        var updatingUser = {};
        updatingUser = Object.assign(updatingUser, req.body);
        delete updatingUser._id;
        
        User.model.findOneAndUpdate({
                        username: updatingUser.username,
                        email: updatingUser.email
                    }
                    , updatingUser
                    , {  new: true, upsert: false }
                    , (err, result) =>{
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

    app.delete(`${urlBase}/remove`, (req,res) => {
        if (!req.body) return;
        User.model.findOneAndRemove({
            username: req.body.username,
            email: req.body.email
        },(err, result) =>{
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