var vendedoresModel = {};
const { response } = require('express');

const mongoose = require('mongoose') 

const Schema = mongoose.Schema;


var VendedoresSchema = new Schema({
    nombre:String,
    edad:Number,
    ocupacion:String,
})

const MyModel = mongoose.model('vendedores',VendedoresSchema)


//GUARDAR
vendedoresModel.guardar = function(post,callback){

    const instancia = new MyModel
    instancia.nombre = post.nombre,
    instancia.edad = post.edad,
    instancia.ocupacion = post.ocupacion,
    
    instancia.save((error,vendedorcreado) => {
        if(error){
            console.log(error)
            return callback({state:false,info:error})
        }
        else {
            console.log(vendedorcreado)
            return callback({state:true,info:vendedorcreado})
        }
    })
}


//LISTAR
vendedoresModel.listar = function(post,callback){

    MyModel.find({},{__v:0},(error,registros) => {
        if(error){
        return callback({state:false,info:error})
    } 
    else {
        return callback({state:true,data:registros})
    }
})
}


//LISTARID
vendedoresModel.listarId = function(post,callback){

    MyModel.find({_id:post.id},{__v:0},(error,registros) => {
        if(error){
        return callback({state:false,info:error})
    } 
    else {
        return callback({state:true,data:registros})
    }
})
}


//MODIFICAR
vendedoresModel.modificar = function(post,callback){

    MyModel.findByIdAndUpdate(post.id,{
        nombre:post.nombre,
        edad:post.edad,
        ocupacion:post.ocupacion,

    },(error,vendedormodificado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,mensaje:'vendedor modificado'})
        }
    } )
}
//ELIMINAR
vendedoresModel.eliminar = function(post,callback){

    MyModel.findByIdAndDelete(post.id,(error,eliminado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,mensaje:'vendedor eliminado'})
        }
    })
}




module.exports.vendedores = vendedoresModel;