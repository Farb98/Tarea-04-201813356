const fs = require('fs')
let products = require('../data.json')

function registerProduct(req, res) {
    console.log("Creando objeto: " + req.body.price + " - "+ req.body.name)
    products.push({"price": req.body.price,
                   "name": req.body.name})
    fs.writeFileSync('data.json', JSON.stringify(products))
}

module.exports = {
    registerProduct
}