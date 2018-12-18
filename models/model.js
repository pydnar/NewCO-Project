// Data 
var orm = require("../config/orm.js");

module.exports  = {
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
  // selectUser: function (users, cb) {
  //   orm.selectUser("users", "id", id, function (res) {
  //     cb(res);
  //   });
  // },
  selectUser: function (uuid, cb) {
    orm.selectUser("sites", "uuid", uuid, function (res) {
      cb(res);
    });
  },
  selectItem: function (catelogid, cb) {
    orm.selectUser("catelog", "catelogid", catelogid, function (res) {
      cb(res);
    });
  },
  selectSiteNew: function (siteid, cb) {
    orm.selectUser("sites", "siteid", siteid, function (res) {
      cb(res);
    });
  },

  siteManager: function (uid, cb) {
    orm.selectManager("users", "uid", uid, function (res) {
      cb(res);
    });
  },
  selectUserUUID: function (uid, cb) {
    orm.selectManager("users", "uid", uid, function (res) {
      cb(res);
    });
  },
  selectSites: function (condition, cb) {
    orm.siteSelect("sites", condition, function (res) {
      cb(res);
    });
  },
  createassets: function (cols, vals, cb) {
    orm.create("assets", cols, vals, function (res) {
      cb(res);
    });
  },

  updatesitecost: function(newassetcost, condition, cb) {
    orm.newupdate("sites", "siteassetcount", "siteassetcost", "1", newassetcost, condition, function(res) {
      cb(res);
    });
  },

  selectAssetsWhere: function(uuid, cb) {
    orm.selectWhere("assets", "uuid", uuid, function(res){
      cb(res);
    });
  }
};



// var siteManager = {
//   person: function (uuid, cb) {
//     orm.selectUser("users", "email", uuid, function (res) {
//       cb(res);
//     });
//   },
//   sites: function (uuid, cb) {
//     orm.all("sites", uuid, function (res) {
//       cb(res);
//     });
//   },



