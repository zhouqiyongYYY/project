var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/personal', function(req, res, next) {
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
	  // Find some documents
	  collection.find({uname:req.body.username}).toArray(function(err, docs) {
	    assert.equal(err, null);
	    console.log("Found the following records");
	    console.log(docs);
	    res.send(docs);
	    // callback(docs);
	  });
	 
	  client.close();
	});
});

module.exports = router;
