const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());

var userName=[];

app.get('/getData',(req,res)=>{
    console.log('end',userName);
    userName.forEach(element=>console.log('sdsa',element.name));
    res.send(userName);
});

app.post('/addData',(req,res)=>{
    userName.push({'name':req.body.name});
    res.json({'msg':'success','data':userName});
});

app.post('/delData',(req,res)=>{
    debugger;
    if(userName!=""){
          console.log(req.body.name);
    userName.forEach(function(element,i) {
        if(element.name==req.body.name){
        var usr = userName.indexOf(req.body.name);
        userName.splice(i,1);
        }
    });
    console.log('delete',userName);
     res.json({'msg':'success','data':userName});
    }
    else{
    console.log(req.body.name);
    res.json({'msg':'success','data':userName});
   }
});

var port =3000;
app.listen(port,()=>console.log('server run at port '+port));