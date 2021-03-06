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
    // console.log(uuid);
    console.log("Looking at request below");
    // console.log(req);
    model.selectUser([uuid], function (data) {
        var listofSites = {
            sites: data
        };
        // console.log(listofSites);
        res.json(listofSites);
        console.log(listofSites);
    });
});

router.get("/api/getuser/:uid", function (req, res) {
    var uid = req.params.uid;
    // console.log(uid);
    console.log("Looking at request below");
    //console.log(req);
    model.selectUserUUID([uid], function (data) {
        var uid = {
            users: data
        };
        console.log("from user " + uid);

        console.log(JSON.stringify(uid));
        res.json(uid);
    });
});

router.get("/api/sitecost/:siteid", function (req, res) {
    var siteid = req.params.siteid;
    // console.log(siteid);
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

router.post("/api/sites", function (req, res) {
    console.log(Object.values(req.body));
   
    model.newSite([Object.keys(req.body)], [Object.values(req.body)], function (result) {
      var assetdata = {
        newSites: result
      };
      res.json( {id: 0} );
    });
  });

router.get("/api/scanner/:catelogid", function (req, res) {
    var catelogid = req.params.catelogid;
    // console.log(catelogid);
    console.log("Looking at request below");
    // console.log(req);
    model.selectItem([catelogid], function (data) {
        var listofcatelog = {
            catelog: data
        };
        console.log("THE catelog id should be here");
        res.json(listofcatelog);

    });
});


router.get("/api/scannersitefind/:siteid", function (req, res) {
    var siteid = req.params.siteid;
    // console.log(siteid);
    console.log("Looking at request below");
    // console.log(req);
    model.selectSiteNew([siteid], function (data) {
        var listofcatelog = {
            sites: data
        };
        console.log("THE site should be here");
        res.json(listofcatelog);

    });
});



router.post("/api/:id", function (req, res) {
    var id = req.params.id;
    //   console.log(id);
    //   model.selectOne([id], function(data) {
    //     var model = {
    //       homemodel: data
    //     };
    //     res.json(model);
    //   });
    console.log(id);
});


router.post("/api/scanner/:serialno/:siteid/:catelogid/:assetdescription/:assetcost", function (req, res) {
    console.log("New asset coming!");
   // console.log(req);
   // console.log(res);
    model.createassets(
        ["serialno", "siteid", "catelogid", "assetdescription", "assetcost"]
        , [
            req.params.serialno, req.params.siteid, req.params.catelogid, req.params.assetdescription, req.params.assetcost,
        ], function (result) {
            console.log(req.params);
            res.json({ id: result.insertId });
        });
});


router.post("/api/createSite/:siteaddress/:serviceSLA/:uuid/:siteassetcount/:siteassetcost", function (req, res) {
    console.log(req.params);
    model.addNewSite(
        ["siteaddress", "serviceSLA", "uuid", "siteassetcount", "siteassetcost"]
        , [
            req.params.siteaddress, req.params.serviceSLA, req.params.uuid, req.params.siteassetcount, req.params.siteassetcost,
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/scannersiteupdate/:siteid/:assetcost", function (req, res) {
    var condition = "siteid = " + req.params.siteid;
    var newassetcost = req.params.assetcost;

    console.log("condition", condition);

    model.updatesitecost(newassetcost, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
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
