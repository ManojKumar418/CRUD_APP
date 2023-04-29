const express = require('express');

// set up our express app
const app = express();
const mongoose = require('mongoose');



// connect to mongodb
mongoose.connect('your connection string');
const database = mongoose.connection
database.on('error', (error) => {
  console.log(error) 
})

database.once('connected', () => {
  console.log('Database Connected');
})
// mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());

// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(8080, ()=>{
console.log(`server started at ${8080}`);
})
