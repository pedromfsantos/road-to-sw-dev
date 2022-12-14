let express = require('express');
let app = express();

let bodyParser = require('body-parser')
//let appBP = bodyParser();

/*let absolutePath = __dirname + "/views/index.html"
let absolutePathMiddleware = __dirname + "/your-app-url/json"*/

//console.log(__dirname)



app.post("/name", bodyParser.urlencoded({extended: false}), function (req, res){
  //console.log(req.body)
  res.send({"name": req.body["first"] + " " + req.body["last"]})
})


/*app.route("/name").post(function (req, res) {
  
  let firstname = req.query["first"]
  let lastname = req.query["last"]
  res.send({"name":firstname + " " + lastname })
  
}).get(function (req, res){
  let firstname = req.query["first"]
  let lastname = req.query["last"]
  res.send({"name":firstname + " " + lastname })
})*/

/*app.get("/json", function(req, res) {
    let hellojson = "Hello json"
    //res.json(process.env.MESSAGE_STYLE)
    if (process.env['MESSAGE_STYLE']=="uppercase"){
      hellojson = hellojson.toUpperCase();
    }else{
      //do nothing
    }
    res.json({"message": hellojson})
})*/




































 module.exports = app;
