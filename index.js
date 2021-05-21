const app = require('./src/server');
const dbConnect = require('./src/lib/db');

dbConnect()
    .then(() => {
        console.log('Db connected');
        app.listen(8080, ()=> {
            console.log('Server listening')
        })
    }).catch((err) => {
        console.error('DB Connection Error: ', err)
    });

