const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./routes/products'))
app.use(require('./routes/soldProducts'))
app.use(require('./routes/employ'))
app.use(require('./routes/deleteEmploy'))
app.use(require('./routes/admin'))
app.use(require('./routes/manager'))

const path = require('path')
app.use(express.static(path.join(__dirname, "../frontend/build")))

const mongoose = require('mongoose')
const DB = 'mongodb+srv://itsalphasynapse:test1234@cluster0.h0u9bga.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB).then(
    console.log('connected successfully')
).catch((err)=>console.log('no connection'))

const port = 8000;
app.listen(port, console.log(`http://localhost:${port}`))
