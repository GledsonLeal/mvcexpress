const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const alunosRotas = require('./routes/alunosRotas');
const adminRotas = require('./routes/adminRotas');

const app = express();

//const conexao = require('./db/bancoMysql')

//const Aluno = require('./models/Aluno')


var hbs = require('hbs');// LINHA ADICIONAL
hbs.registerPartials(path.join(__dirname + '/views/partials'));// LINHA ADICIONAL

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/alunos', alunosRotas);
app.use('/administrador', adminRotas);

app.get('/', (req, res)=>{
  res.render('index')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
