const mysql = require("mysql");

//Connection Pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//view count umkm
exports.view_umkm = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    connection.query("SELECT COUNT(id_Usaha) AS Tmikro FROM umkm WHERE omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta' OR omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta' OR omset = 'Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta'", (err, rows1) => {
      //when done with the connection, release it.
      connection.query("SELECT COUNT(id_Usaha) AS Tmenengah FROM umkm WHERE omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar'", (err, rows3) => {
          //when done with the connection, release it.
          connection.query("SELECT COUNT(id_Usaha) AS Tkecil FROM umkm WHERE omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.500 Juta' OR omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar' OR omset = 'Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta'", (err, rows2) => {
              //when done with the connection, release it.
              connection.query("SELECT COUNT(id_Usaha) AS TotalUMKM FROM umkm", (err, rows4) => {
                //when done with the connection, release it.
                // connection.query("SELECT FROM umkm WHERE omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta' OR omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta' OR omset = 'Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta'", (err, usahamikro) => {
                //   connection.query("SELECT FROM umkm WHERE omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.500 Juta' OR omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar' OR omset = 'Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta'", (err, usahakecil) => {
                //     connection.query("SELECT FROM umkm WHERE omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar'", (err, usahamenengah) => {


                //when done with the connection, release it. 
                connection.release();

                if(!err){
                    res.render("data",{rows1, rows2, rows3, rows4});
                }
                
                else{
                    console.log(err);
                } 
                // console.log('The data from user table: \n', rows1, rows2, rows3,rows4);


                
              });
          });
        });
      });
    });
  //     });
  //   });
  // });
};

//VIEW TABLE UMKM
exports.view_tabelumkm = (req, res) => {
  //connect db.s
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

    //show data
    connection.query("SELECT * FROM umkm", (err, rows) => {
      //when done with the connection, release it.
      connection.release();

      if (!err) {
        res.render("data", { 
          rows, 
          sukses: req.query.sukses, 
          pesan: req.query.pesan 
        });
      } else {
        console.log(err);
      }
      // console.log("The data from user table: \n", rows);
    });
  });
};
//view tabel usaha mikro
exports.view_tabelmikro = (req, res) => {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

    //show data
    connection.query("SELECT * FROM umkm WHERE omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta' OR omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta' OR omset = 'Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta'", (err, rows) => {
      //when done with the connection, release it.
      connection.release();

      if (!err) {
        res.render("datamikro", { 
          rows, 
          sukses: req.query.sukses, 
          pesan: req.query.pesan 
        });
      } else {
        console.log(err);
      }
      // console.log("The data from user table: \n", rows);
    });
  });
};
//view tabel usaha kecil
exports.view_tabelkecil = (req, res) => {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

    //show data
    connection.query("SELECT * FROM umkm WHERE omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta' OR omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar' OR omset = 'Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Miliar'", (err, rows) => {
      //when done with the connection, release it.
      connection.release();

      if (!err) {
        res.render("datakecil", { 
          rows, 
          sukses: req.query.sukses, 
          pesan: req.query.pesan 
        });
      } else {
        console.log(err);
      }
      // console.log("The data from user table: \n", rows);
    });
  });
};

//view tabel usaha menengah
exports.view_tabelmenengah = (req, res) => {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);

    //show data
    connection.query("SELECT * FROM umkm WHERE omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar'", (err, rows) => {
      //when done with the connection, release it.
      connection.release();

      if (!err) {
        res.render("datamenengah", { 
          rows, 
          sukses: req.query.sukses, 
          pesan: req.query.pesan 
        });
      } else {
        console.log(err);
      }
      // console.log("The data from user table: \n", rows);
    });
  });
};
//View data
exports.view_jeniskelamin = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query("SELECT SUM(jenis_kelamin ='Laki-Laki') AS Total_laki FROM penduduk", (err, rows1) => {
      //when done with the connection, release it.
      connection.query("SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk", (err, rows2) => {
            //when done with the connection, release it.
            connection.query("SELECT COUNT(jenis_kelamin) AS TotalJK FROM penduduk", (err, rows3) => {
              connection.release();

              if(!err){
                  res.render("data-jeniskelamin",{rows1, rows2, rows3});
              }
              else{
                  console.log(err);
              } 
              console.log('The data from user table: \n', rows1, rows2,rows3);
              
                
      });
    });
    });
  });
};