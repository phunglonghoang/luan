'use strict';

const controller = {};

const  mysql = require('mysql');
var db = mysql.createConnection({
   host: '127.0.0.1', user: 'root', password: '', 
   database: 'chungculexico'
}); 

controller.showHomepage = async (req, res) => {
    // const Product = await db.Product.findAll({
        
    // });
    res.render('index');
}

controller.showPage = (req, res, next) => {
    const pages = ['about', 'appoinment', 'chinh-sach-bao-mat', 'chung-chi', 'contact', 'feature', 'index', 
    'noi-quy-website', 'service', 'team', 'testimonial', 'products'];
    if (pages.includes(req.params.page));
        return res.render(req.params.page);
    next();
}
module.exports = controller;