const mongoose = require('mongoose')

const employModule = new mongoose.Schema({
    name: String,
    description: String,
    phone: Number
})

const Employs = mongoose.model('employs', employModule);

module.exports = Employs;
