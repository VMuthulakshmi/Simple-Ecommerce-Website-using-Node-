var express=require('express');
var app=express();
var bodyparser=require('body-parser')
var controller=require('./controller/controller')

app.set('view engine','ejs');
app.use(express.static('./public'));

controller(app)


app.listen(3000);
console.log("Server is running");

