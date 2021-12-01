const express = require('express');
const db_config   = require('./config/database.js');
const bodyParser = require('body-parser');
const conn = db_config.init();

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

app.post('/api/members', (req, res) => {
    var body = req.body;
    console.log(body);

    var sql = 'INSERT INTO members VALUES(?, ?, ?, ?)';
    var params = [body.id, body.password, body.username];
    console.log(sql);
    conn.query(sql, params, function(err){
        if(err) console.log('Insertion failed.. ' + err);
        else res.redirect('/api/members_info');
    })
});

app.delete('/api/cart', (req,res) => {
    var body = req.body;
    var sql = 'DELETE FROM cart WHERE id=? and Fno=?';
    var params = [body.id, body.fno];
    conn.query(sql, params, function(err){
        if(err) console.log('Delete from cart failed...', +err);
        else res.redirect('api/cart');
    })
})

app.get('/api/members', (req, res) => {
    //console.log(body);
    var sql = 'SELECT * FROM members WHERE mem_id = ? and mem_password = ?';
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

app.get('/api/UserID', (req, res) => {
    //console.log(body);
    var sql = 'SELECT user_id FROM members WHERE mem_id = ?';
    var params = [req.query.current_id];
    console.log(sql);
    
    conn.query(sql,params, function (err, rows, fields){
        if(err) console.log('load user_id failed..' + err);
        else{
            console.log('sql 결과 : '+JSON.stringify(rows))
            res.send(rows);
        }
    })
})


app.listen(port, () => {console.log(`Listening on port ${port}`)});