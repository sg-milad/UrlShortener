const express = require('express');
const app = express();
const morgan = require('morgan');
const DB = require('./connect/mongo');
const cors = require('cors');
app.use(morgan('dev'));
app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(express.static('public'));

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/shorturl'));
app.set('view engine', 'ejs');

app.listen(5000, () => console.log('server is running'));
