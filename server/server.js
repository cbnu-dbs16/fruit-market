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

const Storage = multer.diskStorage({
    destination(req, file, callback){
        callback(null, './uploads')
    },
    filename(req, file, callback){
        callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
    },
})

app.post('/api/Customer', (req, res) => {
    var body = req.body;
    console.log(body);

    var sql = 'INSERT INTO Customer VALUES(?, ?, ?, ?)';
    var params = [body.id, body.password, body.username];
    console.log(sql);
    conn.query(sql, params, function(err){
        if(err) console.log('Insertion failed.. ' + err);
        else res.redirect('/api/Customer');
    })
});

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

app.delete('/api/cart', (req,res) => {
    var body = req.body;
    var sql = 'DELETE FROM cart WHERE id=? and Fno=?';
    var params = [body.cus_id, body.fno];
    conn.query(sql, params, function(err){
        if(err) console.log('Delete from cart failed...', +err);
        else res.redirect('api/cart');
    })
})

app.get('/api/fruits/like', (req, res) => {
    //console.log(body);
    var sql = 'SELECT * FROM cart WHERE cus_id = ? and fno = ?';
    var params = [req.query.cusid, parseInt(req.query.fno)];
    console.log(sql);
    console.log(req.query);
    conn.query(sql,params, function (err, rows, fields){
        if(err) console.log('Load cart like failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            res.send(rows);
        }
    })
})

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
    console.log(sql);
    
    conn.query(sql,params, function (err, rows, fields){
        if(err) console.log('Login failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            res.send(rows);
        }
    })
})

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

app.listen(port, () => {console.log(`Listening on port ${port}`)});