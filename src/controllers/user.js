
import {UserModel} from '../models/user';
let  user;

//controller
export class UserController{


	constructor() { // class constructor
   		
   		user = new UserModel(); //dependency injection
   	   
    }


   getFind(data){

   		return new Promise( ( resolve, reject ) => {   
	   		var response = user.getFind(data)
	   		.then(function(result){
			   resolve(result);
		    });
   		
   		});
   		
   }

   getList(){

   		return new Promise( ( resolve, reject ) => {   
	   		var response = user.getList()
	   		.then(function(result){
			   resolve(result);
		    });
   		
   		});
   		
   }


}

