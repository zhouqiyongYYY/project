var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/del', function(req, res, next) {
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
	   const collection = db.collection('xuanke');
	  // Delete document where a is 3
	  collection.deleteOne({ lessonId:req.body.id,uname:req.body.uname }, function(err, result) {
	    assert.equal(err, null);
	    assert.equal(1, result.result.n);
	    console.log("Removed the document with the field a equal to 3");
	    // callback(result);
	  });    
	 
	  client.close();
	});
});

module.exports = router;