//DB connection
//var mongoose=require('mongoose');
//url 
//var url="mongodb+srv://muthusana18:muthusana18@cluster0.3vczm.mongodb.net/test?retryWrites=true&w=majority"
//db connection
//mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
//schema definition
//var productsschema=new mongoose.Schema({
 //   item:String
//});
//model
//var product=mongoose.model('product',productsschema)
var data=[{item:'Pencil'},{item:'Pen'},{item:'sketchpens'},{item:'Markers'},{item:'Gliter pens'},{item:'color pencils'},{item:'Black Marker'}];
var shopcart=[];
var bodyparser=require('body-parser');
var urlencoder=bodyparser.urlencoded({extended:false});
module.exports=function(app){

    app.get('/',function(req,res){
        res.render('mainpage',{list:data,list1:shopcart});
    });
    app.get('/mainpage',function(req,res){
        console.log("main page")
        res.render('mainpage',{list:data,list1:shopcart});
    });
    app.get('/mainpage/:item',function(req,res){
        console.log("here")
        shopcart.push({'item':req.params.item})
        console.log(shopcart)
        res.render('mainpage',{list:data,list1:shopcart});
    })
    app.get('/admin',function(req,res){
        res.render('admin');
    });
    app.post('/admin',urlencoder,function(req,res){
        console.log(req.body)
        if(req.body.password=='admin'){
            
            res.render('admin-success',{list:data});
            /* product.find({},function(err,data){
                if(err) throw err
                res.render('admin-success',{list:data});
            });*/
        }else{
            res.render('admin');
        }
    });
    /*
    app.get('/shopcart',function(req,res){
        console.log("shop cart"+shopcart);
        res.render('shopcart',{list:shopcart})
    })*/
    app.post('/insert',urlencoder,function(req,res){
        console.log("admin sucess page iterms adding");
        /*var newItem=product(req.body).save(function(err,data){
            if(err) throw err;
            res.render('admin-success',{list:data})
        })*/
        
        data.push(req.body);
        console.log(data)
        res.render('admin-success',{list:data})
       
    });
    app.post('/delete',urlencoder,function(req,res){
        console.log("admin sucess page iterms deletig");
        /*var newItem=product(req.body).save(function(err,data){
            if(err) throw err;
            res.render('admin-success',{list:data})
        })*/

        data=data.filter(function(list){
            return list.item!==req.body.item
        })
        console.log(data)
        res.render('admin-success',{list:data});
    });
}