const express = require('express');
const path = require('path');
const app = express();

 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const filmsRouter = require('./app_server/routes/films');
app.use('/films', filmsRouter);

const directorsRouter = require('./app_server/routes/directors');
app.use('/directors', directorsRouter);


// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');
 

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}/films...`));
