var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("https://testloginandbd.firebaseio.com");


var model = new mongoose.Schema('users', {clickcount: number});

module.exports = odm;