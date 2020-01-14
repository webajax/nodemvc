const mysql      = require('mysql');
var connection;
//model
 class Connection{



	constructor() { // class constructor
 	
      connection = mysql.createConnection({
		  host     : 'localhost',
		  port     :  3306,
		  user     : 'root',
		  password : '190650',
		  database : 'nodetest'
	  });      

       

    }

  conn( sql) {

        return new Promise( ( resolve, reject ) => {
            connection.query( sql, ( err, rows ) => {

            	var data = [];
            	data.push(err,rows);

                if ( err )
                    return reject( err );

                resolve( data );
            });

        })
    }




 }
   		


    





module.exports = Connection ;