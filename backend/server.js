const express = require('express');
const dotEnv = require('dotenv');
const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.get('/',(req,res)=>{
    res.send('server is running')
})

dotEnv.config({
    path : 'backend/config/config.env'
})

//use middleware-------------
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}));



const PORT = process.env.PORT || 4000

app.listen(PORT,(error)=>{
    if(!error){
        console.log(`server is running port ${PORT}`);
    }
})