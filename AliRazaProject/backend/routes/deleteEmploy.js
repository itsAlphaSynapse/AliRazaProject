const express = require('express')
const route = express.Router()

const Employs = require("../modules/employModule");

route.post('/bseleteemploy', async (req, res) => {
    const { id } = req.body;
    const delet = await Employs.deleteOne({ "_id": id })
    if (delet) {
        res.json({ message: 'done' })
    }
})


module.exports = route
