import jwt from 'jsonwebtoken';
import User from '../models/user';
import utils from '../utils/crypto';

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({ message: 'service is running.' });
  });

  app.use('/api', (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, app.get('superSecret'), (err, decoded) => {
        if (err) {
          return res.json({ success: false, message: 'Falha na aut�ntica��o.' });
        }
        req.decoded = decoded;
        next();
      });
    }
    return res.sendStatus(403);
  });

  app.post('/Authentication', (req, res) => {
    User.model.findOne({ username: req.body.username }, (err, user) => {
      if (err) return;
      if (!user) {
        res.json({ success: false, message: 'Falha na aut�ntica��o. Usu�rio n�o encontrado.' });
      } else {
        const decp = utils.decrypt(user.password);
        if (decp !== req.body.password) {
          res.json({ success: false, message: 'Falha na aut�ntica��o. Senha incorreta.' });
        } else {
          const token = jwt.sign(user, app.get('superSecret'), { expiresIn: 3 });
          res.json({
            success: true,
            message: 'Token gerado com sucesso!',
            user,
            token,
          });
        }
      }
    });
  });
};
