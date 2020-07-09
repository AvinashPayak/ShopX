const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const { static } = require('express');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

app.listen(3000);