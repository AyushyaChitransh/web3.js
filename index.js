var Web3Legacy = require('./lib/web3');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Web3 === 'undefined') {
    window.Web3 = Web3Legacy;
}

module.exports = Web3Legacy;
