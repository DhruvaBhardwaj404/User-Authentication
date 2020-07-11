require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {checkUser}=require('../src/checkUser.js');
const  {writeData} = require('../src/writeData.js');
const mongoose = require('mongoose')

let app = express();
const port = process.env.PORT;

//=====developer modules=======//
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config= require('../../../webpack.config')
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


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../../build')));



//===authentication of user====//
app.post('/auth',async (req,res)=>{
  const exist= await checkUser(req.body.query);
  if(exist){
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


//========web app distro======//
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../build', 'index.html'));
});

app.listen(port, _=> console.log(`The server is listening on port ${port}`));