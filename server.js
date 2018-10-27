'use strict'

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let list = ["First","Second"];

app.use(bodyParser.json()).use(express.static(__dirname + "/public")).listen(3015);


app.route('/api').get(function(req,res){
    res.send({list:list.join(",")});
  }).post(function(req,res){
    var item = req.body.item;
    list.push(item);
    res.send({list:list.join(",")});
  });

app.route('/api/:name').delete(function(req,res){
  let nameRemove=req.params['name'];
  list = list.filter(function(name){return name!==nameRemove});
  res.send({list:list.join(",")});
});
