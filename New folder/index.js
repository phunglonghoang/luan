'use strict';



const  express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const expressHandlebars = require('express-handlebars');
//seting public
app.use(express.static(__dirname + '/public'));
const mysql  = require('mysql2');

// Thiết lập kết nối đến cơ sở dữ liệu
const connection = mysql.createConnection({
  host: '127.0.0.1', // Địa chỉ máy chủ MySQL của XAMPP
  user: 'root',      // Tên người dùng MySQL
  password: '',      // Mật khẩu MySQL
  database: 'chungculexico', // Tên cơ sở dữ liệu bạn muốn kết nối
});

// // Kiểm tra kết nối
// connection.connect((err) => {
//     if (err) {
//       console.error('Lỗi kết nối đến cơ sở dữ liệu: ' + err.message);
//     } else {
//       console.log('Đã kết nối đến cơ sở dữ liệu');
//     }
//   });


//   connection.query('SELECT * FROM apartment', (err, results) => {
//     if (err) {
//       console.error('Lỗi truy vấn: ' + err.message);
//       return;
//     }
//     console.log('Dữ liệu từ bảng: ', results);
//   });

//Cấu hình sử dụng express-handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir:__dirname + '/views/layouts',
    partialsDir:__dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout'
}));
app.set('view engine', 'hbs');

//routes


app.use('/products', require('./routes/productsRouter'));

app.use('/', require('./routes/IndexRouter'));

app.use((req, res, next) => {
    res.status(404).render('error', {message: 'Fine not Found!'});
});


app.use((error, req, res, next) => {
  console.error(error); 
  res.status(500).render('error', {message: 'Fine not Found!'});
});

app.listen(port, () => {
    console.log('server is running on port:', port);
});


