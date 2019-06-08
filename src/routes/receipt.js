// NodeJS Core Modules
const path = require('path');

// NPM Modules
const express = require('express');
const router = express.Router();

// App modules
const rootDir = require('../util/path');

router.get('/add', (req, res, next) => {
    // we use path.join cause this works on both systems linux and windows
    // linux path example: '/user/produces'  
    // windows path example: '\user\products' 
    res.sendFile(path.join(rootDir, 'views', 'add-receipt.html'));
})

/**
 * handle incomming POST requests on /admin/add-receipt route 
 **/
router.post('/add', (req, res, next) => {
    console.log(req.body);
    res.redirect('/dashboard');
})

module.exports = router;
