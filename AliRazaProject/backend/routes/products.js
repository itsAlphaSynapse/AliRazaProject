const express = require('express')
const route = express.Router()

const Product = require("../modules/productModule");

route.post('/bproducts', async (req, res) => {
    const { name, description, price } = req.body;
    const status = 'avalible'
    if (!name || !description || !price) {
        res.json({ message: 'fields does not filled' })
    } else {
        const products = new Product({ name, description, price, status })
        const saved = await products.save()
        if (saved) {
            res.json({ message: 'done' })
        }
    }
})


route.get('/bproducts', async (req, res) => {
    const data = await Product.find({})
    res.json(data)
})

module.exports = route
