const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');

const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname,'public')));

const mailRoutes = require('./routes/mail');

app.get('/',(req,res,next)=>{
    res.render('home',{
        path: '/home',
        
    })
})

app.use(mailRoutes);

app.listen(3001);