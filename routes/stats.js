var express = require('express');
var router = express.Router();
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
 


//
router.get('/statistik/umkm', function (req, res, next) {
    // konek
        // data dari tabel
    
    pool.getConnection((err, connection) => {
            if (err) throw err; //NOT CONNECTED.
            console.log(`Connected as ID ` + connection.threadId);
    
            //show data
            // SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk
    
        connection.query("SELECT COUNT(id_Usaha) AS Tmikro from umkm WHERE omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta' OR omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta' OR omset = 'Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta'", (err, rows1) => {
            //when done with the connection, release it.
            connection.query("SELECT COUNT(id_Usaha) AS Tmenengah from umkm WHERE omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar'", (err, rows2) => {
                //when done with the connection, release it.
                connection.query("SELECT COUNT(id_Usaha) AS Tkecil from umkm WHERE omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.500 Juta' OR omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar' OR omset = 'Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta'", (err, rows3) => {
                    //when done with the connection, release it.
                
   
    
                            if (!err) {
                                res.json(
                                    {
                                        label: ["My First dataset"],
                                        backgroundColor: [
                                        "rgb(128,0,0)",
                                        "rgb(139,0,0)",
                                        "rgb(165,42,42)",],
                                        data: [rows1[0].Tmikro, rows3[0].Tmenengah, rows2[0].Tkecil],
                                        hoverOffset: 3,},
                                );
                            } else {
                                console.log(err);
                            }
                            console.log("The data from user table: \n", rows1, rows2, rows3);
                });
            });
        });
    });
});




module.exports = router;