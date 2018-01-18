import app from '../app'
import crypto from 'crypto';

const algorithm = 'aes-256-ctr';
const secret = process.env.SECRET;

export const utils ={
            encrypt : function (text){
                var cipher = crypto.createCipher(algorithm,secret)
                var crypted = cipher.update(text,'utf8','hex')
                crypted += cipher.final('hex');
                return crypted;
            } 
            , decrypt :function(text){
                var decipher = crypto.createDecipher(algorithm,secret)
                var dec = decipher.update(text,'hex','utf8')
                dec += decipher.final('utf8');
                return dec;
            }
            , encryptBuffer : function (buffer){
                var cipher = crypto.createCipher(algorithm,secret)
                var crypted = Buffer.concat([cipher.update(buffer),cipher.final()]);
                return crypted;
            }            
            , decryptBuffer : function (buffer){
                var decipher = crypto.createDecipher(algorithm,secret)
                var dec = Buffer.concat([decipher.update(buffer) , decipher.final()]);
                return dec;
            }
        };

