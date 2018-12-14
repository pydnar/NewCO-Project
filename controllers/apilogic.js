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
    model.selectUser([uuid], function (data) {
        var listofSites = {
            sites: data
        };

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
