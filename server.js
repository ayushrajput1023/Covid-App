//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/covid-app'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/covid-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200,function(){
  console.log('Server is running on port 4200');
});
