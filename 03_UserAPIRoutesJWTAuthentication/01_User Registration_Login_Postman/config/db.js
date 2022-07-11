
const MongoClient = require('mongoose');

MongoClient.connect("mongodb://localhost:27017/mydbtest2", { useNewUrlParser: true }, (err) =>{

if(!err) { 
    console.log('MongoDB Connected')
}else { 
    console.log('Error  Connected:' +err )
}

});