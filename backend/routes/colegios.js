const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db')

router.get('/', (req, res)=>{
  mysqlConnection.query("SELECT * FROM instituciones_educativas",
  (err, rows, field)=>{
    if(!err) res.json(rows);
    else console.log(err)
  }
  )
});

router.get('/colegio/:id',
(req,res)=>{
  const {id}=req.params;

  mysqlConnection.query('SELECT * FROM instituciones_educativas WHERE id=?', [id],(err,rows,fields)=>{
    if(!err){
      res.json(rows)
    }else{
      console.log(err)
    }
    })
})

router.post('/nuevo-colegio',(req,res)=>{
  const {nombre_ie,docente_encargado_mt, pagina_web, direccion, foto_ie, descripcion_ie, telefono_institucional, correo_institucional}=req.body;
  
  let datosColegio=[nombre_ie,docente_encargado_mt, pagina_web, direccion, foto_ie, descripcion_ie, telefono_institucional, correo_institucional];

  let nuevoColegio ='INSERT INTO instituciones_educativas(nombre_ie,docente_encargado_mt, pagina_web, direccion, foto_ie, descripcion_ie, telefono_institucional, correo_institucional) VALUES(?,?,?,?,?,?,?,?)';
  

  mysqlConnection.query(nuevoColegio,datosColegio,(err,result, fields)=>{
    if(err){
      return console.error(err.message);
    }  
    res.json({message:'Nuevo Colegio creado correctamente'})
  })
})

//PUT (cristian7u7)

router.put('/colegio/:id', (req, res) => {
  const {nombre_ie,docente_encargado_mt,pagina_web,direccion,foto_ie,
  descripcion_ie,telefono_institucional,correo_institucional} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE instituciones_educativas SET nombre_ie =?,
      docente_encargado_mt = ?,pagina_web = ?,direccion = ?,foto_ie = ?,
      descripcion_ie = ?,telefono_institucional = ?, 
      correo_institucional = ?  WHERE id = ?`, 
      [nombre_ie,docente_encargado_mt,pagina_web,direccion,foto_ie,
        descripcion_ie,telefono_institucional,correo_institucional,id], 
        (err, rows, fields) => {
          if(!err) {
            res.json({status: 'Colegio actualizado'});
          } else {
            console.log(err);
        }
      });
});


//DELETE (Keitti)
router.delete('/colegio/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM instituciones_educativas WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Eliminamos el colegio'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;