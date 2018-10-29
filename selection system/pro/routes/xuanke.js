var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/xuanke', function(req, res, next) {
	// console.log(req.body.brr);
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
  // Insert some documents
	  collection.update({"lessonId":req.body.lessonId}, {$setOnInsert:{
	  		lessonId : req.body.lessonId,
	    	lessonName:req.body.lessonName,
	    	lessontime:req.body.lessontime,
	    	lessonplace:req.body.lessonplace,
	    	teacher:req.body.teacher,
	    	uname:req.body.uname,
	    }}, {upsert:true})
	  // res.send('选择成功');
		// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })

	 
	  client.close();
	});
});

module.exports = router;
