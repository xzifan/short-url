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
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});