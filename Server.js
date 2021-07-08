const registerProductService = require('./services/registerProduct.js')
const showProductService = require('./services/showProducts.js')
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.post('/registerProduct', (req, res) => {
    registerProductService.registerProduct(req,res)})

app.get('/showProducts', (req, res) => {
    showProductService.showProducts(req,res)})

app.listen(3000, () => console.log('App run on port 3000!'))