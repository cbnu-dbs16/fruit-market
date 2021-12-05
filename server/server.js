const express = require('express');
const db_config   = require('./config/database.js');
const bodyParser = require('body-parser');
const conn = db_config.init();
const jwt = require('jsonwebtoken');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));


app.post('/api/Customer', (req, res) => {
    var body = req.body;
    console.log(body);

<<<<<<< HEAD
    var sql = 'INSERT INTO Customer VALUES(?, ?, ?, ?, ?, ?)';
=======
    var sql = 'INSERT INTO Customer VALUES(?, ?, ?, ?)';
>>>>>>> 449b3b8c3cf74a4be3db0fac8be439702f4977be
    var params = [body.id, body.password, body.username];
    console.log(sql);
    conn.query(sql, params, function(err){
        if(err) console.log('Insertion failed.. ' + err);
        else res.redirect('/api/Customer');
    })
});

<<<<<<< HEAD
app.get('/api/Customer', (req, res) => {
    //console.log(body);
    var sql = 'SELECT * FROM Customer WHERE cus_id = ? and cus_password = ?';
    var params = [req.query.id, req.query.password];
    console.log(sql);
    
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
    var params = [body.cus_id, 1, body.comment, body.fno];
    console.log(sql);
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
    conn.query(sql,params, function (err, rows, fields){
        if(err) console.log('Load specify comments failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})


=======
>>>>>>> 449b3b8c3cf74a4be3db0fac8be439702f4977be
app.get('/api/fruits', (req,res) => {
    var sql = 'SELECT * FROM fruits';
    
    console.log(sql);
    console.log(req.query);
    conn.query(sql, function (err, rows, fields){
        if(err) console.log('Load fruits failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

<<<<<<< HEAD
app.get('/api/fruits/detail', (req,res) => {
    var sql = 'SELECT * FROM fruits WHERE fno = ?';
    var params = [req.query.fno];
    console.log(sql);
    console.log(req.query);
    conn.query(sql,params,  function (err, rows, fields){
        if(err) console.log('Load fruits failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

=======
>>>>>>> 449b3b8c3cf74a4be3db0fac8be439702f4977be
app.delete('/api/cart', (req,res) => {
    var body = req.body;
    var sql = 'DELETE FROM cart WHERE id=? and Fno=?';
    var params = [body.cus_id, body.fno];
    conn.query(sql, params, function(err){
        if(err) console.log('Delete from cart failed...', +err);
        else res.redirect('api/cart');
    })
})

<<<<<<< HEAD
app.get('/api/cartList', (req,res) => {
    var sql = 'SELECT * FROM cart WHERE cus_id = ? and fno= ?';
    console.log(sql);
    var params = [req.query.id];
    conn.query(sql,params,  function (err, rows, fields){
        if(err) console.log('Load cart failed..' + err);
=======
app.get('/api/fruits/like', (req, res) => {
    //console.log(body);
    var sql = 'SELECT * FROM cart WHERE cus_id = ? and fno = ?';
    var params = [req.query.cusid, parseInt(req.query.fno)];
    console.log(sql);
    console.log(req.query);
    conn.query(sql,params, function (err, rows, fields){
        if(err) console.log('Load cart like failed..' + err);
>>>>>>> 449b3b8c3cf74a4be3db0fac8be439702f4977be
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

<<<<<<< HEAD
app.post('/api/cart', (req, res) => {
    //console.log(body);
    var body = req.body;
    var sql = 'INSERT INTO cart VALUES (?, ?)';
    var params = [body.cus_id, body.fno];
=======
app.get('/api/cartfruits', (req,res) => {
    var sql = 'SELECT * FROM fruits WHERE fno = ?';
    var params = [req.query.fno];
    console.log(sql);
    console.log(req.query);
    conn.query(sql,params, function (err, rows, fields){
        if(err) console.log('Load cart fruits failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

app.get('/api/cartList', (req,res) => {
    var sql = 'SELECT * FROM cart WHERE cus_id = ?';
    console.log(sql);
    var params = [req.query.id];
    conn.query(sql,params,  function (err, rows, fields){
        if(err) console.log('Load cart failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

app.put('/api/fruits', (req, res) => {
    //console.log(body);
    var sql = 'UPDATE fruits SET state = ? WHERE fno = ?';
    var params = [false, req.query.fno];
    console.log(sql);
    console.log(params);
    console.log(req.query);
    conn.query(sql,params, function (err, rows, fields){
        if(err) console.log('Fruits state update failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

app.get('/api/Customer', (req, res) => {
    //console.log(body);
    var sql = 'SELECT * FROM Customer WHERE cus_id = ? and cus_password = ?';
    var params = [req.query.id, req.query.password];
>>>>>>> 449b3b8c3cf74a4be3db0fac8be439702f4977be
    console.log(sql);
    console.log(params);
    console.log(req.query);
    conn.query(sql,params, function (err, rows, fields){
<<<<<<< HEAD
        if(err) console.log('Insert cart failed..' + err);
=======
        if(err) console.log('Login failed..' + err);
>>>>>>> 449b3b8c3cf74a4be3db0fac8be439702f4977be
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

<<<<<<< HEAD
=======
app.post('/api/cart', (req, res) => {
    //console.log(body);
    var body = req.body;
    var sql = 'INSERT INTO cart VALUES (?, ?)';
    var params = [body.cus_id, body.fno];
    console.log(sql);
    console.log(params);
    console.log(req.query);
    conn.query(sql,params, function (err, rows, fields){
        if(err) console.log('Insert cart failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            if(rows) res.send(rows);
        }
    })
})

>>>>>>> 449b3b8c3cf74a4be3db0fac8be439702f4977be
app.listen(port, () => {console.log(`Listening on port ${port}`)});