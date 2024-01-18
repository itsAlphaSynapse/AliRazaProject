const express = require('express')
const route = express.Router()

const Employs = require("../modules/employModule");

route.post('/bemploy', async (req, res) => {
    const { name, description, phone } = req.body;
    if (!name || !description || !phone) {
        res.json({ message: 'fields does not filled' })
    } else {
        const employs = new Employs({ name, description, phone })
        const saved = await employs.save()
        if (saved) {
            res.json({ message: 'done' })
        }
    }
})


route.get('/bemploy', async (req, res) => {
    const data = await Employs.find({})
    res.json(data)
})

module.exports = route
