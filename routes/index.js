import User from "../models/user";
import utils from "../utils/crypto";
import jwt from "jsonwebtoken";

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.json({ message: "service is running." });
    });

    app.use('/api', function (req, res, next) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, app.get('superSecret'), function (err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Falha na aut�ntica��o.' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.status(403).send({
                success: false,
                message: 'Nenhum token fornecido.'
            });
        }
    });

    app.post('/Authentication', function (req, res) {
        User.model.findOne({ username: req.body.username }, function (err, user) {

            User.findOne({ username: req.body.name, email: req.body.name }, function (err, user) {
                if (err) throw err;
                if (!user) {
                    res.json({ success: false, message: 'Falha na aut�ntica��o. Usu�rio n�o encontrado.' });
                } else if (user) {
                    var _decp = utils.decrypt(user.password);
                    if (_decp != req.body.password) {
                        res.json({ success: false, message: 'Falha na aut�ntica��o. Senha incorreta.' });
                    } else {
                        var token = jwt.sign(user, app.get('superSecret'), { expiresIn: 3 });
                        res.json({
                            success: true,
                            message: 'Token gerado com sucesso!',
                            user: user,
                            token: token
                        });
                    }
                }
            });
        });
    });

}