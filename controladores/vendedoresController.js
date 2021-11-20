var vendedoresModel = require("../modelos/vendedoresModel.js").vendedores 

var vendedoresController = {};



//GUARDAR
vendedoresController.guardar = function(request,response){
    var post = {
        nombre:request.body.nombre,
        edad:request.body.edad,
        ocupacion:request.body.ocupacion,
    }
    if (post.nombre == undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje: "el campo nombre es obligatorio"})
        return false;
    }

    if (post.edad == undefined || post.edad == null || post.edad == ''){
        response.json({state:false,mensaje: "el campo edad es obligatorio"})
        return false;
    }

    if (post.ocupacion == undefined || post.ocupacion == null || post.ocupacion == ''){
        response.json({state:false,mensaje: "el campo ocupacion es obligatorio"})
        return false;
    }

    vendedoresModel.guardar(post,function(respuesta){
        response.json({state:true,mensaje: "AGREGADO"})
        //response.json(respuesta)
    })
}






//LISTAR
vendedoresController.listar = function(request,response){
    vendedoresModel.listar(null,function(res){
        response.json(res)
    })
}



//LISTARID
vendedoresController.listarId = function(request,response){
    var post = {
        id:request.body.id
    }
    if(post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje:'el campo id es obligatorio'})
        return false;
    }
    vendedoresModel.listarId(post,function(res){
        response.json(res)
    })
}




//MODIFICAR
vendedoresController.modificar = function(request,response){
    var post = {
        id:request.body.id,
        nombre:request.body.nombre,
        edad:request.body.edad,
        ocupacion:request.body.ocupacion,

    }
    if (post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje: "el campo id es obligatorio"})
        return false;
    }

    if (post.nombre == undefined || post.nombre == null || post.nombre == ''){
        response.json({state:false,mensaje: "el campo nombre es obligatorio"})
        return false;
    }

    if (post.edad == undefined || post.edad == null || post.edad == ''){
        response.json({state:false,mensaje: "el campo edad es obligatorio"})
        return false;
    }

    if (post.ocupacion == undefined || post.ocupacion == null || post.ocupacion == ''){
        response.json({state:false,mensaje: "el campo ocupacion es obligatorio"})
        return false;
    }
    vendedoresModel.modificar(post,function(respuesta){
        response.json(respuesta)
    })

}




//ELIMINAR
vendedoresController.eliminar = function(request,response){
    var post = {
        id:request.body.id
    }
    if (post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje: "el campo id es obligatorio"})
        return false;
}
    vendedoresModel.eliminar(post,function(respuesta){
    response.json(respuesta)
})

}


module.exports.vendedores = vendedoresController
