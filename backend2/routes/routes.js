const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');

//SOLICITUD TIPO GET (GENERAL) A LA RUTA Medicamento 

router.get('/Medicamento', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM Medicamentos ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });


// SOLICITUD DE TIPO GET (ID) A LA RUTA Medicamento

router.get('/Medicamento/:ID_medicamento', (req, res) => {
    const { ID_medicamento } = req.params; 
    mysqlConnection.query('SELECT * FROM Medicamentos WHERE ID_medicamento = ?', 
    [ID_medicamento], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
 
//SOLICITUD TIPO GET A LA RUTA Farmacia 

router.get('/Farmacia', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM Farmacia ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

//SOLICITUD DE TIPO GET (ID) A LA RUTA FARMACIA

router.get('/Farmacia/:ID_farmacia', (req, res) => {
    const { ID_farmacia } = req.params; 
    mysqlConnection.query('SELECT * FROM Farmacia WHERE ID_farmacia = ?', 
    [ID_farmacia], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  }); 

// POST A LA RUTA FARMACIA

router.post('/Farmacia',(req,res)=>{

const { Horarios_farmacia,Formulas,Dirección_farmacia,Nombre_farmacia,Medicamentos} = req.body;

let farmacia = [Horarios_farmacia,Formulas,Dirección_farmacia,Nombre_farmacia,Medicamentos];            

let nuevaFarmacia = `INSERT INTO Farmacia(Horarios_farmacia,Formulas,Dirección_farmacia,Nombre_farmacia,Medicamentos)
                  VALUES(?,?,?,?,?)`;
mysqlConnection.query(nuevaFarmacia, farmacia, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Farmacia Registrada de forma exitsa`, })
  });
});


// POST A LA RUTA MEDICAMENTO 

router.post('/Medicamento',(req,res)=>{

const {Fecha_lote,Lugar_medicamento,Nombre_medicamento,ID_medicamento} = req.body;

let medicamento = [Fecha_lote,Lugar_medicamento,Nombre_medicamento,ID_medicamento];

let nuevoMedicamento = `INSERT INTO Medicamentos (Fecha_lote,Lugar_medicamento,Nombre_medicamento,ID_medicamento)
                  VALUES(?,?,?,?)`;
mysqlConnection.query(nuevoMedicamento, medicamento, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Medicamento Registrado de forma exitosa`, })
  });
});
module.exports = router;




