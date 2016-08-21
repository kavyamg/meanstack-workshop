var express=require('express');
var app=express();

var mongojs=require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyparser=require('body-parser');

app.use(express.static(__dirname+"/public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.get('/get',function(req,res){
db.contactlist.find(function(err,docs){
  console.log(err);
  console.log(docs);
  res.json(docs);
 });
});

app.post('/contact',function(req,res){
  console.log(req.body);
  db.contactlist.insert(req.body,function(err,docs){
    console.log(docs);
    res.json(docs);
  });
});

app.delete('/contact/:id',function(req,res){
    console.log(req.params.id);
    var id=req.params.id;
  db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,docs){

    res.send(docs);
  });

});

app.listen(3000, function () {

    console.log("server running");
});
