const mongoose = require('mongoose')

const managerModule = new mongoose.Schema({
    name: String,
    password: String,
})

const Admin = mongoose.model('admin', managerModule);

module.exports = Admin;
