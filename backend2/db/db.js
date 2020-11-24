const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bmmivbyxszbtipce2yyw-mysql.services.clever-cloud.com',
  user: 'uq6zor4qkyfc5zun',
  password: 'K7ekUxkb4EIoHeqXq1Pm',
  database:  'bmmivbyxszbtipce2yyw',
  port:"3306",
  multipleStatements: true
});




mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});



module.exports = mysqlConnection;