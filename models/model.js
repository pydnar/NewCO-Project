// Data 
var orm = require("../config/orm.js");

var users = {
  all: function (cb) {
    orm.all("users", function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create("users", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("users", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("users", condition, function (res) {
      cb(res);
    });
  },
  selectUser: function (id, cb) {
    orm.selectUser("users", "id", id, function (res) {
      cb(res);
    });
  },
};

var siteManager = {
  person: function (cb) {
    orm.all("", function (res) {
      cb(res);
    });
  },
  selectUser: function (uuid, cb) {
    orm.selectUser("users", uuid, function (res) {
      cb(res);
    });
  },
  selectUser: function (uuid, cb) {
    orm.all("sites", uuid, function (res) {
      cb(res);
    });
  },
};

module.exports = {users,sites};

