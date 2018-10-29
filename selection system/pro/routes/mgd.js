var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/mgd', function(req, res, next) {
  	const MongoClient = require('mongodb').MongoClient;
	const assert = require('assert');
	 
	// Connection URL
	const url = 'mongodb://localhost:27017';
	 
	// Database Name
	const dbName = 'studentlist';
	 
	// Use connect method to connect to the server
			MongoClient.connect(url, function(err, client) {
		  	assert.equal(null, err);
		  	console.log("Connected successfully to server"); 
		  	const db = client.db(dbName);	
	  		const collection = db.collection('students');
  			collection.find({uname:req.body.uname}).toArray(function(err, docs) {
	    	assert.equal(err, null);
	    	console.log(docs);
	   		if(docs){
	    		res.send(docs);
	    		client.close();
		    }else{
				collection.insertMany([
			    {
			    	uname:req.body.uname,
			    	password:req.body.psw,
			    	gender:req.body.gender,
			    	email:req.body.email,
			    	ban:req.body.ban,
			    	xuehao:req.body.xuehao,
			    	xi:req.body.xi
			    }
				], function(err, result) {
			    assert.equal(err, null);
			    assert.equal(1, result.result.n);
			    assert.equal(1, result.ops.length);
			    console.log("Inserted 1 documents into the collection");
			    // callback(result);
				});
		   	 }
		    	console.log("Found the following records");
		 	});
  			client.close();
		});
	});

module.exports = router;
