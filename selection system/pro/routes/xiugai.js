var express = require('express');
var router = express.Router();
const assert = require('assert');
var db = require('../public/javascripts/db.js')

/* GET users listing. */
router.post('/xiugai', function(req, res, next) {
	   function cha(){
	   		return new Promise(function(resolve,reject){
	   			db.query(function(db){
	   				db.collection('students').find({uname:req.body.uname,password:req.body.password}).toArray(function(err, docs) {
					    console.log("Found the following records");
					    console.log(docs);
					    if(docs.length>0){
					    	resolve()
					    }else{
					    	res.send('账号或者密码不正确');
					    }    	
		  			});
	   			})
	   		})
	   };
	   function gai(){
	   		return new Promise(function(resolve,reject){
	   			// console.log( req.body.uname,req.body.password)
	   			db.query(function(db){
	   				db.collection('students').update({
					 	'uname': req.body.uname,'password':req.body.password
					}, {
						  $set: {
						    'password': req.body.newpsw
						  }					
					});
			    		res.send('修改成功');
		   			})
	   			})
	  	 };
	   cha().then(gai);
	  // Find some documents
});

module.exports = router;
