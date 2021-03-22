//https://segmentfault.com/a/1190000020142570
const express = require('express');
const connectDB = require('./config/db');
const fs = require('fs')
const http = require('http')
const https = require('https')
const privatekey = fs.readFileSync('./sslcert/private.key.pem')
const cert = fs.readFileSync('./sslcert/domain.cert.pem')
const app = express();

var credentials = {key:privatekey,cert:cert}
// 连接MongoDB
connectDB();

app.use(express.json({
  extended: false
}));

// 路由，稍后设置
app.get('/',function(req,res){
    res.send('hello world')
})
app.use('/r', require('./routes/index'));
app.use('/api/url', require('./routes/url'));


// app.listen(port, ()=>{
//     console.log(`server runing on port ${port}`)
// });
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials,app)

httpServer.listen(8080)
httpsServer.listen(8443)