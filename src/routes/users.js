//const express = require("express");
import express from 'express'
const app = express();
const PORT = process.env.PORT = 3000;
import {UserController} from '../controllers/user';
const user = new UserController();
let router = express.Router();
var bodyParser = require('body-parser');

// parse application/json show fields
router.use(bodyParser.json())

router.post('/users/find',function(req,res){
	console.log(req.user);
  //res.setHeader('Content-Type', 'text/plain');
  //res.write('you posted:\n');

  //res.end(JSON.stringify(req.body.username, null, 2));

  //send array user and pass
  var data=[];
  data.push(req.body.user,req.body.pass)


  user.getFind(data)
  .then(function(result){

  		if(result[0]){
  			res.json({"erro" : "$result[0]" });
  		}else{
  			
  			if(result[1].length > 0){
	  			res.json({
	  				"status" : true,
	  				"message": "success",
	  				"data"   : result[1]
	  			});
  		    }else{
				res.json({
	  				"status" : false,
	  				"message": "false",
	  				"data"   : result[1]
	  			});  		    	
  		    }
  		}		

			   
  });  
  

  //res.json(req.body);
});

router.get('/users/list',function(req,res){
  
  user.getList()
  .then(function(result){
		res.json(result[1]);	   
  });

});




module.exports = router ;