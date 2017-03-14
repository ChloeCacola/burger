var orm = require("../config/orm.js");

var burger = {
	allBurgers: function(cb) {
		orm.selectAll();//enter params
	},

	createBurger: function(cols, vals, cb) {
		orm.insertOne();//enterparams
	},

	updateBurger: function(objColVals, condition, cb) {
		orm.updateOne();//enterparams
	}
}

module.exports = burger;