const crypto = require('crypto');

 module.exports = function generationUniqueId(){
    
    return crypto.randomBytes(4).toString('HEX');
}