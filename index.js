//https://segmentfault.com/a/1190000020142570
const express = require('express');
const connectDB = require('./config/db');
const app = express();

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

const port = 8080;

app.listen(port, ()=>{
    console.log(`server runing on port ${port}`)
});