const Admin = require('../models/Admin');

exports.getAdmin = function (req, res) {
    db.Admin.findById(req.params.id)
}