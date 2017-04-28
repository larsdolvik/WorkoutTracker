var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thelist', function(req, res) {
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/workoutTracker';

	MongoClient.connect(url, function(err, db ) {
		if(err){
			console.log("Unable to connect to the server", err);
		} else{
			console.log("Connection successfull");

			var collection = db.collection('users');
			collection.find({}).toArray(function(err, result) {
				if(err){
					res.send(err);
				} else if(result.length){
					res.render('userlist', {
						"userlist": result
					});
				} else{
					res.send("No documents found");
				}

				db.close();
			});
		}
	});
});

router.get('/newuser', function(req, res){
	res.render('newuser', {title: 'Add User'});
});

router.post('/adduser', function(req, res){
 
    // Get a Mongo client to work with the Mongo server
    var MongoClient = mongodb.MongoClient;
 
    // Define where the MongoDB server is
    var url = 'mongodb://localhost:27017/workoutTracker';
 
    // Connect to the server
    MongoClient.connect(url, function(err, db){
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
 
        // Get the documents collection
        var collection = db.collection('users');
 
        // Get the student data passed from the form
        var user1 = {user: req.body.user, brukernavn: req.body.brukernavn,
          epost: req.body.epost, passord: req.body.passord};
 
        // Insert the student data into the database
        collection.insert([user1], function (err, result){
          if (err) {
            console.log(err);
          } else {
 
            // Redirect to the updated student list
            res.redirect("thelist");
          }
 
          // Close the database
          db.close();
        });
 
      }
    });
 
  });

module.exports = router;
