const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const { static } = require('express');

const mongoConnect = require('./utils/database');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(userRoutes);

mongoConnect.mongoConnect(() => {
    app.listen(3000);
})
