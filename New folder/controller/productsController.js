let controller = {};


var db=require('../models/apartment');
controller.show = async (req, res) => {
    let apartments = `SELECT * FROM apartment`;
    db.query(apartments, function(err, data) {      
        res.render("loai_list",{list:data});    
    }); 
}

module.exports = controller;