/**
 * UtentiController
 *
 * @description :: Server-side logic for managing utentis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	  
	
  hi: function (req, res) {
    return res.send("Hi there!");
  },
  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  },
  eliminalo: function (req, res) {
  	console.log("passo il controllo");
    return res.send("Da implemenatre");

	}

};

