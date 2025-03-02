// require('dotenv').config();
// const mysql = require('mysql2/promise');
// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// // const { data } = require('react-router');

// const Servidor = express();

// Servidor.use(cors());
// Servidor.use(morgan('dev'));
// Servidor.use(express.json());

// const pool = mysql.createPool({
//     host: process.env.MYSQL_HOST || 'localhost',
//     user: process.env.MYSQL_USER || 'root',
//     password: process.env.MYSQL_PASSWORD || '',
//     database: process.env.MYSQL_DB || 'loginusers',
//     waitForConnections: true,
//     connectAttributes: 10,
//     queueLimit: 0
// });

// Servidor.get('/api/usuarios', async (req, res)=>{
//     try{
//         const connection  = await pool.getConnection(); // para obtener conexion.
//         const [rows] =  await connection.execute('SELECT * FROM loginusers ');
//         connection.release();

//         res.status(200).json({data: rows})

//     }catch (err){
//         console.error('Error al pedir los usuarios',err);
//         res.status(200).json({err: true,mensaje: ' tenemos un hermoso error'});
//     };
// });

// const PORT = process.env.PORT || 4000;
// Servidor.listen(PORT,() => {
//     console.log(`🫂El servidor esta corriendo en el locahost${PORT}`);
// });
