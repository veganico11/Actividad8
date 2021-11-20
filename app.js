var express = require("express");
global.app = express();
global.config = require("./config.js").config 
const mongoose = require('mongoose') 

var bodyParser = require("body-parser");      
const { response } = require("express");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



mongoose.connect('mongodb://127.0.0.1:27017/' + config.nombrebd, 
{useNewUrlParser:true,useUnifiedTopology:true},
(error,response)=>{
if(error){
    console.log(error)
}
    else{
        console.log('Conexion a mongo correcta')
    
}
} )



require("./routes/rutas.js") 


app.listen(config.puerto,function(){
    console.log("Servidor funcionando por el puerto " + config.puerto)
})

