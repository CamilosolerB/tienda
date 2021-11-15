//llamado de las librerias
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const { Cookie } = require('express-session');
const app = express();

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'))

app.use(session({
    resave:true,
    secret:'123',
    saveUninitialized:true,
    Cookie: {secure : true}
}))

app.use(express.urlencoded({extended:true}));
app.use(require('./rutas/rutas'))
app.use=(err,req,res,next)=>{
    res.send({err:err.message})
}

//habilitacion puesto local

app.set('port',process.env.PORT || 3000)

app.listen(app.get('port'),()=>{
    console.log(`En el servidor ${app.get('port')}`)
})