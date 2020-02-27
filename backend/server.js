const express = require('express'),
  path = require('path'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mysql = require('mysql'),
  port = 3001,
  socketEvents = require('./utils/socket');

const CONSTANTS = require('./config/constants');
const queryHandler = require('./utils/query-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

var http = require('http').createServer(app);


const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
});

// connect to database
db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});
global.db = db;

// const http = require('http').createServer(app);


app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.options('*', cors());
// https://jsonplaceholder.typicode.com/users
app.get('/', function(req, res) {
  res.sendFile(path.resolve('index.html'));
});

app.get('/Test', (req, res) => res.send('Hello World Test!'));


app.post('/api/authentication', (req, res) => {
    var queryString = `SELECT * FROM user where email = '${req.body.email}'`;
    db.query(queryString, function(err, rows, fields) {
      if (err) throw err;
      let update = `UPDATE user set is_active = true where id = ${JSON.parse(JSON.stringify(rows))[0].id}`;
      db.query(update, function(err, rows, fields) {
        var queryString = `SELECT * FROM user where email = '${req.body.email}'`;
        db.query(queryString, function(err, rows, fields) {
          res.send(rows);
        });
      });
    });
});

app.post('/getMessages', async (request, response) => {
  const userId = request.body.userId;
  const toUserId = request.body.toUserId;
  if (userId == '') {
    response.status(CONSTANTS.SERVER_ERROR_HTTP_CODE).json({
      error : true,
      message : CONSTANTS.USERID_NOT_FOUND
    });
  }else{
    try {
      const messagesResponse = await queryHandler.getMessages({
        userId:userId,
        toUserId: toUserId
      });
      response.status(CONSTANTS.SERVER_OK_HTTP_CODE).json({
        error : false,
        messages : messagesResponse
      });
    } catch ( error ){
      response.status(CONSTANTS.SERVER_NOT_ALLOWED_HTTP_CODE).json({
        error : true,
        messages : CONSTANTS.USER_NOT_LOGGED_IN
      });
    }
  }
});

app.get('/api/users', (req, res) => {
  var queryString = 'SELECT * FROM user';
  db.query(queryString, function(err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });
});

app.get('/api/users/:userId', (req, res) => {

});

http.listen(port, () => console.log(`Example app listening on port ${port}!`));
var io = require('socket.io').listen(http);
new socketEvents(io).socketConfig();

io.on('connection', function( socket ) {
  console.log("a user has connected!");
});

