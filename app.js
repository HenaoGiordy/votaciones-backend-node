const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

//Configuracion general
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//API
app.use('/api', require('./routes/api'));

app.listen(PORT, () =>{
    console.log(`Server Listening on port ${PORT}`)
})