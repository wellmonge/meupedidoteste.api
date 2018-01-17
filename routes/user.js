import User from "../models/user";
import utils from "../utils/crypto";

// const urlBase = '/api/user/';
const urlBase = '/user/';

module.exports = function(app) {

    app.get(urlBase + 'findAll', function(req, res) {
        User.model.find({}, function(err, users) {
            res.json(users);
        });
    });
    
    app.post(urlBase + 'create', function(req, res) {
        if (!req.body) return;
        req.body.password = utils.encrypt(req.body.password);
        let newUser = new User.model(req.body);
        newUser.save(function (err) {            
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
                    Message: utils.successMessage
                }); 
            });
    });

    app.put(urlBase + 'update', function(req, res) { 
        if (!req.body) return;
        var updatingUser = {};
        updatingUser = Object.assign(updatingUser, req.body);
        updatingUser.updatedAt = new Date();
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

    app.delete(urlBase + 'remove', function(req, res) {
        if (!req.body) return;

        User.model.findOneAndRemove({
            username: req.body.username,
            email: req.body.email
        },(err, result) =>{
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

}