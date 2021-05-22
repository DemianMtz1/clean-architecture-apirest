// este archivo aloja la definicion de nuestro servidor
const { json } = require('express');
const express = require('express');
const kodersRouter = require('./routers/koders');
const mentorsRouters = require('./routers/mentors')
const app = express();

app.use(express.json())
app.use((req,res,next)=> {
    let options = {
        method: req.method,
        path: req.url,
        data: req.body
    }
    console.log(`${req.method} ${req.url}`, req.body)
    next()
})
app.use('/koders', kodersRouter);
app.use('/mentors', mentorsRouters);

module.exports = app;