const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

const routes = require('./routes');

app.listen(3000);
