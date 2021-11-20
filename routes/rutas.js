
var VendedoresC = require("../controladores/vendedoresController.js").vendedores


app.post("/vendedores/guardar",function(request,response){
    VendedoresC.guardar(request,response)
})

app.post("/vendedores/listar",function(request,response){
    VendedoresC.listar(request,response)
})

app.post("/vendedores/listarId",function(request,response){
    VendedoresC.listarId(request,response)
})

app.post("/vendedores/modificar",function(request,response){
    VendedoresC.modificar(request,response)
})

app.post("/vendedores/eliminar",function(request,response){
    VendedoresC.eliminar(request,response)
})