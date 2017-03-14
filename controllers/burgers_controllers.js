var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res) {

	burger.allBurgers(function(data) {
		var hbsObject = {
			burgers: data
		}
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {

	burger.insertBurger();//insertparams
});

router.put("/:id", function(req,res) {
	var condition = "id = " + req.params.id;

	console.log("condition" + condition);

	burger.updateBurger();//insertparams
});

//router export for server.js
module.exports = router;