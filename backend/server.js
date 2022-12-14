const express = require('express');
const dotEnv = require('dotenv');
const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dbConnect = require('./config/dbConnect');
const authRouter = require('./routes/authRoutes');
const dashboadRoute = require('./routes/Dashborad/dashboradRoutes');



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


// route  declaire 
app.use('/rest-api',authRouter);
app.use('/rest-api',dashboadRoute);





// db connect........
dbConnect();

const PORT = process.env.PORT || 4000

app.listen(PORT,(error)=>{
    if(!error){
        console.log(`server is running port ${PORT}`);
    }
})