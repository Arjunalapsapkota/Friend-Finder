var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path = require("path");
var PORT=process.env.PORT||8080;

var jsonParser=bodyParser.json();
var urlencoderParser=bodyParser.urlencoded({extended:false});
app.use(bodyParser.json({type:'application/**json'}));
app.use(bodyParser.raw({type:'application/vnd.custom-type'}));
app.use(bodyParser.text({type:'text/html'}))


//Enable public content
app.use(express.static('app/public'));


//Data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT,function(){
    console.log("App Listening on PORT :"+PORT);
})