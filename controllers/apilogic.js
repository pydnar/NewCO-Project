var express = require("express");

var router = express.Router();

var model = require("../models/model.js");

router.get("/api", function (req, res) {
    var id = req.params.id;
    //   console.log(id);
    model.selectOne([id], function (data) {
        var model = {
            bakingcakes: data
        };
        res.json(model);
    });
});

router.get("/api/sites/:uuid", function (req, res) {
    var uuid = req.params.uuid;
    console.log(uuid);
    console.log("Looking at request below");
    console.log(req);
    model.selectUser([uuid], function (data) {
        var listofSites = {
            sites: data
        };
        console.log("THE SITE SSHOULD BE HERE");
        res.json(listofSites);

    });
});


router.get("/api/getuser/:uid", function (req, res) {
    var uid = req.params.uid;
    console.log(uid);
    console.log("Looking at request below");
    //console.log(req);
    model.selectUserUUID([uid], function (data) {
        var uid = {
            users: data
        };
        console.log("The UID should be below.");
        res.json(uid);
    });
});

router.get("/api/sitecost/:siteid", function (req, res) {
    var siteid = req.params.siteid;
    console.log(siteid);
    console.log("Looking at request below");
    //console.log(req);
    model.selectUser([siteid], function (data) {
        var listofassets = {
            assets: data
        };
        console.log("THE assets SSHOULD BE HERE");
        res.json(listofassets);

    });
});



router.get("/api/scanner/:catelogid", function (req, res) {
    var catelogid = req.params.catelogid;
    console.log(catelogid);
    console.log("Looking at request below");
    console.log(req);
    model.selectItem([catelogid], function (data) {
        var listofcatelog = {
            catelog: data
        };
        console.log("THE catelog id should be here");
        res.json(listofcatelog);

    });
});




router.post("/api", function (req, res) {
    var id = req.params.id;
    //   console.log(id);
    //   model.selectOne([id], function(data) {
    //     var model = {
    //       homemodel: data
    //     };
    //     res.json(model);
    //   });
});


router.post("/api/scanner/", function (req, res) {
    console.log("New asset coming!");
    console.log(req);
    console.log(res);
    model.createassets([
        "serialno", "siteid","catelogid","assetdescription","assetcost"
      ], [
        req.body.serialno, req.body.siteid,req.body.catelogid,req.body.assetdescription, req.body.assetcost,
      ], function(result) {
        res.json({ id: result.insertId });
      });
    });


router.post("/api/assets", function(req, res) {
    var newassets = Object.values(req.body);
  
    console.log(newassets);
  
    model.createassets([Object.keys(req.body)], [Object.values(req.body)], function(
      result
    ) {
      var assetdata = {
        assets: result
      };
  
      //res.json("/home/" + email[2]);
    });
  });


    //   console.log(id);
    //   model.selectOne([id], function(data) {
    //     var model = {
    //       homemodel: data
    //     };
    //     res.json(model);
    //   });




router.post("/login/:uuid/:first/:last", function (req, res) {
    console.log(req.params);
    // var id = req.params;
    //   console.log(id);
    //   model.selectOne([id], function(data) {
    //     var model = {
    //       homemodel: data
    //     };
    //     res.json(model);
    //   });
});

// router.update("/api", function (req, res) {
//     //Change update value in table itemactive
//     var id = req.params.id;
//     //   console.log(id);
//     // model.selectOne([id], function (data) {
//     //     var model = {
//     //         homemodel: data
//     //     };
//     //     res.json(model);
//     // });
// });

router.delete("/api", function (req, res) {
    //Change update value in table itemactive
    model.selectOne([id], function (data) {
        var model = {
            homemodel: data
        };
        res.json(model);
    });
});
module.exports = router;
