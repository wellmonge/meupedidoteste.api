var crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secret = process.env.SECRET;

const utils = {
  encrypt(text) {
    const cipher = crypto.createCipher(algorithm, secret);
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  },
  decrypt(text) {
    const decipher = crypto.createDecipher(algorithm, secret);
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  },
  encryptBuffer(buffer) {
    const cipher = crypto.createCipher(algorithm, secret);
    const crypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
    return crypted;
  },
  decryptBuffer(buffer) {
    const decipher = crypto.createDecipher(algorithm, secret);
    const dec = Buffer.concat([decipher.update(buffer), decipher.final()]);
    return dec;
  }
};


exports.utils = utils;