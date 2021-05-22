// este archivo aloja la definicion de nuestro servidor
const express = require('express');
const kodersRouter = require('./routers/koders');
const mentorsRouters = require('./routers/mentors')
const app = express();

app.use(express.json())
app.use('/koders', kodersRouter);
app.use('/mentors', mentorsRouters);

module.exports = app;