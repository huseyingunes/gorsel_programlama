var mysql = require('mysql');

var baglanti = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "stok"
});

baglanti.connect(function(err) {
  if (err) throw err;
  console.log("Veri Tabanı Bağlantısı Başarılı");
});