const express = require('express');
const bodyParser = require('body-parser');
//const db_config   = require('./config/database.js');
//const conn = db_config.init();

const mysql      = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'fruit_market'
});

conn.connect();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));


app.post('/api/Customer', (req, res) => {
    
    var body = req.body;
    console.log(body);

    var sql = 'INSERT INTO Customer VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var params = [body.cus_id, body.cus_password, body.username, body.userphonenum, body.city, body.gu, body.dong, body.jibun, body.useremail];
    res.header("Access-Control-Allow-Origin", "*");
    conn.query(sql, params, function(err){
        if(err) console.log('Insertion failed.. ' + err);
        else res.redirect('/api/Customer');
    })
});

app.get('/api/Customer', (req, res) => {
    //console.log(body);
    var sql = 'SELECT * FROM Customer WHERE cus_id = ? and cus_password = ?';
    var params = [req.query.userid, req.query.userpwd];
    console.log(sql);
    console.log(req.query);
    res.header("Access-Control-Allow-Origin", "*");
    conn.query(sql,params, function (err, rows, fields){
        if(err) console.log('Login failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            res.send(rows);
        }
    })
})

app.post('/api/comments',(req, res) => {
    var body = req.body;
    console.log(body);

    var sql = 'INSERT INTO comments VALUES(?, ?, ?, ?)';
    var params = [body.userid, 1, body.comment, body.fno];
    console.log(sql);
    res.header("Access-Control-Allow-Origin", "*");
    conn.query(sql, params, function(err){
        if(err) console.log('Insertion failed.. ' + err);
        
        //else res.send(rows);
    })
});

app.get('/api/comments', (req,res) => {
    var body = req.query;
    var sql = 'SELECT * FROM comments WHERE fno=?';
    var params = [parseInt(body.fno)];
    console.log(sql);
    console.log(req.query);
    res.header("Access-Control-Allow-Origin", "*");
    conn.query(sql,params, function (err, rows, fields){
        if(err) console.log('Load specify comments failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})


app.get('/api/fruits', (req,res) => {
    var sql = 'SELECT * FROM fruits';
    
    console.log(sql);
    console.log(req.query);
    res.header("Access-Control-Allow-Origin", "*");
    conn.query(sql, function (err, rows, fields){
        if(err) console.log('Load fruits failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

app.get('/api/fruits/detail', (req,res) => {
    var sql = 'SELECT * FROM fruits WHERE fno = ?';
    var params = [req.query.fno];
    console.log(sql);
    console.log(req.query);
    res.header("Access-Control-Allow-Origin", "*");
    conn.query(sql, params,  function (err, rows, fields){
        if(err) console.log('Load fruits failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

app.get('/api/orderlist', (req,res) => {
    var sql = 'SELECT * FROM Customer WHERE cus_id = ?';
    var params = [req.query.userid];
    console.log(sql);
    console.log(req.query);
    res.header("Access-Control-Allow-Origin", "*");
    conn.query(sql,params,  function (err, rows, fields){
        if(err) console.log('Load failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

app.delete('/api/cart', (req,res) => {
    var body = req.body;
    var sql = 'DELETE FROM cart WHERE cus_id=? and fno=?';
    var params = [body.userid, body.fno];
    res.header("Access-Control-Allow-Origin", "*");
    conn.query(sql, params, function(err){
        if(err) console.log('Delete from cart failed...', +err);
        else res.redirect('api/cart');
    })
})

app.get('/api/cartList', (req,res) => {
    var sql = 'SELECT * FROM cart WHERE cus_id = ?';
    console.log(sql);
    var params = [req.query.userid];
    res.header("Access-Control-Allow-Origin", "*");
    conn.query(sql,params,  function (err, rows, fields){
        if(err) console.log('Load cart failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

app.post('/api/cart', (req, res) => {
    //console.log(body);
    var body = req.body;
    var sql = 'INSERT INTO cart VALUES (,?, ?)';
    var params = [body.userid, body.fno];
    console.log(sql);
    console.log(params);
    console.log(req.query);
    res.header("Access-Control-Allow-Origin", "*");
    conn.query(sql,params, function (err, rows, fields){
        if(err) console.log('Insert cart failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

var cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: 'GET, POST'
  }));

  
app.listen(port, () => {console.log(`Listening on port ${port}`)});