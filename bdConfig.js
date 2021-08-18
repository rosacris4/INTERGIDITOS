const mysql = require('mysql');
  const con = mysql.createConnection({
    host: '127.0.0.1', 
    user: 'root',  
    password: '', 
    database: 'interdigitostest'

  });

  con.connect((err) => {
    if (err) {
        console.log('Erro de conexão...', err)
        return
    }
    console.log('conexão estabelecida')
})

con.end((err) => {
    if(err) {
        console.log('Erro ao terminar a conexão..', err)
        return 
    }
    console.log('a conexão terminou')
})