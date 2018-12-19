//step 1 create business logic page the tell server about this controller
var express = require("express");

var router = express.Router();
//var store = require("store");
var model = require("../models/model.js");
var states = require("simmigonstatespackage");



router.get("/", function (req, res) {

    res.render("index");
});

router.get("/index", function (req, res) {
    res.render("index");
});

router.get("/scanner", function (req, res) {
    res.render("scanner");
});

router.get("/siteassets/:siteid", function (req, res){
    var siteid = req.params.siteid;
    model.selectAssetsWhere(siteid, function(data) {
        var assets = {
            siteassets: data
        };
        res.render("siteassets", assets);
        console.log("Assets should be below this!");
        console.log(assets);
    })
})

router.get("/login", function (req, res) {
    res.render("login");
});

router.get("/home", function (req, res) {
    //   model.sites.all(function(data) {
    //     var siteData = {
    //       site: data
    //     }
    //     console.log(siteData);
    res.render("home");
});


router.get("/admin", function (req, res) {
    res.render("admin");
});

router.get("/mysites/:uuid", function (req, res) {

    // var state = JSON.stringify(states);
    // var ThisnameDoesnotmatter = { data: { findstates: state } };
    // var email = "dee.joe@jdjd.com";
    // var uuid = "bg0wty0JXUZmaPDD4Z9NduKpDW03";
    var uuid = req.params.uuid;
    console.log("This is the new unhard coded uuid " + uuid);
    console.log(req.params);
    // model.all(function(data) {
    //     var insuranceObject = {
    //       users: data
    //     };
    // model.siteManager.person(email, uuid, function (data) {
    //     var person = {
    //         personData: data
    //     }
    //     var ThisnameDoesnotmatter = { person };
    //     console.log(ThisnameDoesnotmatter);
    //     res.render("customer", insuranceObject);
    //     console.log(insuranceObject)
    // });
    // model.siteManager.sites(function(data){
    //     var sites = {
    //         siteData: data
    //     }
    // });
     
    console.log("UID ABOVE and UUID will be below:");

    model.siteManager(uuid, function(data) {
        var siteManagerObject = {
            siteManager: data
        };
        res.render("mysites", siteManagerObject);
        console.log(siteManagerObject)
    });
});

router.get("/site", function (req, res) {

    var state = JSON.stringify(states);
    var ThisnameDoesnotmatter = { data: { findstates: state } };

    res.render("site", ThisnameDoesnotmatter.data);
});

// Step 2 add the controller for the page: step 1 is in the /partial/users/nav folder
router.get("/test", function (req, res) {
    // Step 3 tell the get request which page to load: step 1 is in the /partial/users/nav folder
    res.render("test");
});

//Example of how to use model
// router.get("/login", function (req, res) {
//     model.all(function (data) {
//         var insuranceObject = {
//             model: data
//         };
//         res.render("login", insuranceObject);
//     });
// });

module.exports = router;
