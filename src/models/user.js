//import {Connection} from '../../config/database';
const Connection = require('../../config/database'); 
let connect;//var database connect
//model
export class UserModel{



	constructor() { // class constructor
 		
       connect  = new Connection();

    }

   getFind(data){
   	
		//console.log(data[0]);
		//return;	   
	
		return new Promise( ( resolve, reject ) => {   
		   connect.conn("select * from user WHERE user = '" + data[0] + "' AND pass = '" + data[1] + "'")
	       .then(function(result){
	       	  resolve(result);

	       });
	   });  
   }

   getList(){
   	
	  	return new Promise( ( resolve, reject ) => {   
		   connect.conn("select * from user")
	       .then(function(result){
	       	  resolve(result);

	       });
	   });  
   }
}