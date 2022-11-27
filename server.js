const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors = require('cors') 

app.use(express.json());
app.use(cors({
    origin:'*'
}))
mongoose.connect('mongodb://localhost:27017/contacts',{useNewUrlParser:true,useUnifiedTopology:true},
(err)=>{
    if(err){console.log('Error')}else{console.log("Data Base Connected")}
});
const format=({
    id:Number,
    name:String,
    email:String,
    address:String,
    number1:Number,
    number2:Number,
    relation:String
    
})
const model=mongoose.model('myconstacts',format)
app.post('/post',(req,res)=>{
    const data =new model({
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
       address:req.body.address,
       number1:req.body.number1,
       number2:req.body.number2,
       relation:req.body.relation
      
    });
    
    const val=  data.save();
   return  res.json; 
    
});
app.put('/update/:id',(req,res)=>{
    let updateid=req.params.id;
         updatename=req.body.name,
         updateemail=req.body.email,
         updateaddress=req.body.address,
         updatenumber1=req.body.number1,
         updatenumber2=req.body.number2,
         updaterelation=req.body.relation
    model.findOneAndUpdate({id:updateid},{$set:{name:updatename,email:updateemail,address:updateaddress,number1:updatenumber1,
    number2:updatenumber2,relation:updaterelation}},{new:true},(err,data)=>{
        if(err){res.send('Error')}else{
            if(data==null){res.send("Id Not Matching..")}
            else{res.send(data)}
        }
    })
});
app.delete('/del/:id',(req,res)=>{
    let delid=req.params.id;
    model.findOneAndDelete({id:delid},(err,data)=>{
        if(err){res.send("Error")}else{
            if(data==null){
                res.send('Id not matching...')
            }else{res.send("Deleted")
        }
        }
    })
    
});
app.get('/get',(req,res)=>{
    model.find((err,data)=>{
      if(err){res.send('Failed to Fetch data')}else{
        res.send(data)
      }  
    })
});
app.get('/get/:name',(req,res)=>{
    let getname=req.params.name;
    model.findOne({name:getname},(err,data)=>{
        if(err){
            res.send('Error')
        }else{res.send(data)}
        if(data==null){res.send('id not matching')}
    })
})
app.listen(5000,()=>{console.log('SERVER RUNNING.....')})