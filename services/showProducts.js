let data = require('../data.json');

function showProducts(req, res) {    
    res.send(data)
}

module.exports = {
    showProducts
}