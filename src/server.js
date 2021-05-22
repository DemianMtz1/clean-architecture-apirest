// este archivo aloja la definicion de nuestro servidor
const { json } = require('express');
const express = require('express');
const kodersRouter = require('./routers/koders');
const mentorsRouters = require('./routers/mentors')
const app = express();

const printRequest = require('./middlewares/printRequest')

app.use(express.json())
app.use(printRequest.printRequest)
app.use('/koders', kodersRouter);
app.use('/mentors', mentorsRouters);

module.exports = app;