const crypto = require('crypto'),
    { token_pass } = require('../../config/settings'),
    algorithm = 'aes256';

module.exports = {
    encrypt,
    decrypt
};

function encrypt(value) {
    let cipher = crypto.createCipher(algorithm, token_pass);
    let crypted = cipher.update(value, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(token) {
    let decipher = crypto.createDecipher(algorithm, token_pass);
    let dec = decipher.update(token, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}