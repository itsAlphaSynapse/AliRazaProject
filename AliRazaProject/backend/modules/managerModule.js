const mongoose = require('mongoose')

const managerModule = new mongoose.Schema({
    name: String,
    password: String
})

const Manager = mongoose.model('manager', managerModule);

module.exports = Manager;
