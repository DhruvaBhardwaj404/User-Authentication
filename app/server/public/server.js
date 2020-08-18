require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const https=require('https');
const fs=require('fs');
const {checkUser}=require('../src/checkUser.js');
const  {writeData} = require('../src/writeData.js');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
let app = express();
const port = process.env.PORT;

//=====developer modules=======//
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config= require('../../../webpack.config');
const { Server } = require('http');
const compiler = webpack(config);
app.use(
  middleware(compiler)
);

//=========================//

//====connecting to DB======//

const DB=process.env.DB
mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true}).then((res)=>{
    console.log('connected to DB')
}).catch((err)=>{
  console.log(err,'error while connecting to DB')  
});

//========================//

const Skey=process.env.SECRET

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../../build')));



//===authentication of user====//
app.post('/auth',async (req,res)=>{
  const exist= await checkUser(req.body.query);
  if(await exist){
   
      const token= await jwt.sign({username:await req.body.query.username},Skey);
    
      res.cookie('token',token,{httpOnly:true});
      res.status(200).send(JSON.stringify({body:exist}));
  }
  else{
    res.status('404').send(JSON.stringify({message:false}));
  }
})



//======== new user registeration=====// 
 app.post('/reg',async (req,res)=>{
  const status= await writeData(req.body.query);
  if(status===true){
    res.status(200).send();
  } 
  else if(status.message==='Username Taken'){
    res.send(JSON.stringify({message:'Username Taken'}));
  }
  else{
    res.send(JSON.stringify({message:'ServerError'}))
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
});


https.createServer({
  key:fs.readFileSync('app/server/src/ssl/key.pem'),
  cert:fs.readFileSync('app/server/src/ssl/certificate.pem'),
  
},app).listen(port,()=>{
  console.log(`server running on ${port}`);
})

