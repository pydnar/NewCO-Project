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
