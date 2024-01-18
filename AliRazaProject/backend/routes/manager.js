const express = require('express')
const route = express.Router()

const Manager = require("../modules/managerModule")

route.post('/bmanager', async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        res.json({ message: 'fields does not filled' })
    } else {
        const manager = new Manager({ name, password })
        const saved = await manager.save()
        if (saved) {
            res.json({ message: 'done' })
        }
    }
})

route.get('/bmanager', async (req, res) => {
    const data = await Manager.find({})
    res.json(data)
})


module.exports = route
