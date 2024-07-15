var express = require('express');
var router = express.Router();
const multer =require('multer');
const upload =multer({dest:'uploads/'});
const fs = require('fs');
const connection = require("./../bbdd");

 
/* GET pagina de productos. */
router.get('/', function(req, res, next) {
    connection.query('select * from productos', function (error, results, fields) {
        if (error) throw error;
        res.render('produc', {data:results});
      });
});


/* GET listado de productos. */
router.get('/listado/', function(req, res, next) {
  connection.query('select * from productos', function (error, results, fields) {
      
    if (error) throw error;
      //res.json({data: results});  
      res.render('1_listadoProduc', {data:results});
    });

});

/* Barra de busqueda */
router.get('/listado/', function(req, res, next) {

  if(req.query.id_prod){
      sentencia = "select * from productos where id_prod = " +  req.query.id_prod;
  } else {
    sentencia = "select * from productos";
  }

  connection.query(sentencia, function (error, results, fields) {

      if (error) throw error;
      //res.json({data: results})
      res.render('1_listadoProduc');
    });
  });


/* Carga de Productos. */
router.get('/alta', function(req, res, next) {
      res.render('2_formularioAlta')
      res.json({data: results});  
});

router.post('/alta', upload.single("imagen"), async function(req, res, next) {

let sentencia = 'insert into productos (nombre, descripcion, cant_disponible, precio, imagen) values("' + req.body.nombre + '","' + req.body.descripcion + '","' + req.body.cant_disponible + '","' + req.body.precio + '","/images/' + req.file.originalname + '")'
let results = await connection.query(sentencia)    

fs.createReadStream("./uploads/" + req.file.filename).pipe(fs.createWriteStream("./public/images/" + req.file.originalname), function(error){})
res.render("finalizado", {mensaje: "Producto cargado exitosamente"})

});

/* Modificacion de Productos. */
router.get('/modificar/:id_prod', function(req, res, next) {
  connection.query('select * from productos where id_prod = '+ req.params.id_prod, function (error, results, fields) {
   
    if (error) throw error;
    //res.json({data: results});  
    res.render('3_formularioModificar', {data:results});
  });
});

router.post('/modificar/:id_prod', upload.single('imagen'), async function (req, res, next){

  let sentencia;

  if (req.file){
    sentencia =  `update productos set nombre  = '${req.body.nombre}', descripcion  = '${req.body.descripcion}', cant_disponible  = '${req.body.cant_disponible}', precio  = '${req.body.precio}', imagen = '/images/${req.file.originalname}' 
     where id_prod = ${req.params.id_prod} `

     fs.createReadStream("./uploads/" + req.file.filename).pipe(fs.createWriteStream("./public/images/" + req.file.originalname), function(error){})

  } else {
    sentencia = `update productos set nombre  = '${req.body.nombre}', descripcion  = '${req.body.descripcion}', cant_disponible  = '${req.body.cant_disponible}', precio  = '${req.body.precio}' where id_prod = ${req.params.id_prod}` 
  }  
  
   connection.query(sentencia, function (error, results, fields) {
    if (error) throw error;
  //res.json({data: results});  
    res.render('finalizado', {mensaje: "El producto fue modificado correctamente"});
  });

})



/*Eliminar Productos. */
router.get('/eliminar/:id_prod', function(req, res, next) {
  connection.query('select * from productos where id_prod = '+ req.params.id_prod, function (error, results, fields) {
    if (error) throw error;
    //res.json({data: results});  
    res.render('4_formularioEliminar', {data:results});
  });
});

router.post('/eliminar/:id_prod', upload.single("imagen"), async function(req, res, next) {

  connection.query('delete from productos where id_prod = '+ req.params.id_prod, function (error, results, fields) {
    
    if (error) throw error;
    res.render('finalizado', {mensaje: "El producto fue eliminado correctamente"});
  });

});

module.exports = router;
