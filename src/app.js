const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

const rootDir = require('./util/rootDir');
const mainRoute = require('./routes/main');
const receiptRoutes = require('./routes/receipts');
const adminRoutes = require('./routes/admin');

// set the global 'view enige' to 'ejs'
app.set('view engine', 'ejs');

// tell express that the views can be found in the 'views' folder.
app.set('views', path.join(rootDir, 'views'));

// add middleware for all incomming request, parse body via body-parser package.
app.use(bodyParser.urlencoded({extended: false}));

// add static middleware
app.use('/js', express.static(path.join(rootDir, '../node_modules/jquery/dist')));
app.use('/js', express.static(path.join(rootDir, '../node_modules/bootstrap/dist/js')));
app.use('/css', express.static(path.join(rootDir, '../node_modules/bootstrap/dist/css')));
app.use('/css', express.static(path.join(rootDir, '../node_modules/font-awesome/css')));
app.use('/fonts', express.static(path.join(rootDir, '../node_modules/font-awesome/fonts')));
app.use(express.static(path.join(rootDir, 'public')));

/** 
 * import outsourced routes.
**/
app.use('/', mainRoute);

app.use('/receipts', receiptRoutes);

app.use('/admin', adminRoutes);

/** 
 * handle routes which are not found.
**/
app.use(errorController.get404)

app.listen(3000);
