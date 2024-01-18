const express = require('express')
const route = express.Router()

const Admin = require("../modules/adminModule")

route.post('/badmin', async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        res.json({ message: 'fields does not filled' })
    } else {
        const admin = new Admin({ name, password })
        const saved = await admin.save()
        if (saved) {
            res.json({ message: 'done' })
        }
    }
})

route.get('/badmin', async (req, res) => {
    const data = await Admin.find({})
    res.json(data)
})

module.exports = route
