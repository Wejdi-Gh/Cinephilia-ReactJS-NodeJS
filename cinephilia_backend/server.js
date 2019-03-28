const express = require( 'express')
const bodyParser = require('body-parser')
const app = express();
var passwordHash = require('password-hash');
const nodemailer = require("nodemailer");
const {MongoClient,ObjectID} = require('mongodb')
const assert = require('assert')


app.use(bodyParser.json())

const MongoUrl = 'mongodb://localhost:27017'
const database = 'Members'

MongoClient.connect (MongoUrl, { useNewUrlParser: true },(err ,client) => {

    assert.equal(err,null,'database connection failed')

     const db = client.db(database)

    
  app.post('/addMember', async (req,res)=>{
        let firstname=req.body.firstname
        let lastname=req.body.lastname
        let  email=req.body.email.toLowerCase()
        let  confirmemail=req.body.confirmemail.toLowerCase()
        let  password=passwordHash.generate(req.body.password)
        let  confirmpassword=req.body.confirmpassword

        let addmember= await db.collection('Members').find({email:req.body.email.toLowerCase()}).toArray()
       
        if (addmember.length>0) {
         return  res.send ("Oh noes! that email already exists , please login")

        } 

        if (email !== confirmemail){
            return  res.send ("the Confirm E-mail Address field does not match the E-mail Address field")
        }
        else if ( passwordHash.verify(confirmpassword, password ) === false){
           
            return res.send ("the Confirm Password field does not match the Password field") 
        }
      
      
        let newmember= {firstname,lastname,email,password}

        db.collection('Members').insertOne(newmember,(err,data) =>{
        
       if (err) {
           res.send({message:'cant add member'})
        }
        
       else  res.send({message:'Welcome to CinePhilia'})

         let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, 
            service: 'gmail',
            auth: {
              user: "welcome.to.cinephilia@gmail.com", 
              pass: "cinephilia001"
            }
          });
  
       
       let mailOptions = {
           from: '"Cinephilia" <welcome.to.cinephilia@gmail.com>' , 
           to: email, 
           subject: "CinePhilia Registration Confirmation ", 
           text: "Welcome To CinePhilia", 
           html: ` ${firstname} ${lastname} , Welcome To CinePhilia ! 
           <br/>
           <br/>
           The world's most popular and authoritative source for movies , TV and celebrity content.
           <br/>
           <br/>
           Be a CinePhile !!! 
           <br/>
           <br/>
           Cinephilia Team `
         };

         transporter.sendMail(mailOptions, function(error, info){
           if(error){
              return console.log(error);
           }
           console.log('Message sent: ' + info.response);
      });
      
      transporter.close();

    
        })
       
      
        
    });

app.get('/Member', (req,res)=>{
    
        db.collection('Members').find().toArray((err,data) =>{
        
        if (err) res.send({message:'cant get data'})
        else  res.send(data)
        })
    })

app.get('/Member/:email', (req,res)=>{

        let searchedmember = req.params.email.toLowerCase()
    
        db.collection('Members').findOne({email:searchedmember},(err,data) =>{
        
        if (err) res.send({message:'cant get Member details'})
        else  res.send(data)
        })
    }) 


 app.post('/addfbMember', async (req,res)=>{
        let firstname=req.body.firstname
        let lastname=req.body.lastname
        let  email=req.body.email.toLowerCase()

        let addmember= await db.collection('Members').find({email:req.body.email.toLowerCase()}).toArray()
       
        if (addmember.length>0) {
         return  res.send ({message:"Oh noes! that email already exists , please login"})

        } 

        let newmember= {firstname,lastname,email}

        db.collection('Members').insertOne(newmember,(err,data) =>{
        
       if (err) {
           res.send({message:'cant add member'})
        }
        
       else  res.send({message:'Welcome to CinePhilia'})

         let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, 
            service: 'gmail',
            auth: {
              user: "welcome.to.cinephilia@gmail.com", 
              pass: "cinephilia001"
            }
          });
  
       
       let mailOptions = {
           from: '"Cinephilia" <welcome.to.cinephilia@gmail.com>' , 
           to: email, 
           subject: "CinePhilia Registration Confirmation ", 
           text: "Welcome To CinePhilia", 
           html: ` ${firstname} ${lastname} , Welcome To CinePhilia ! 
           <br/>
           <br/>
           The world's most popular and authoritative source for movies , TV and celebrity content.
           <br/>
           <br/>
           Be a CinePhile !!! 
           <br/>
           <br/>
           Cinephilia Team `
         };

         transporter.sendMail(mailOptions, function(error, info){
           if(error){
              return console.log(error);
           }
           console.log('Message sent: ' + info.response);
      });
      
      transporter.close();

    
        })
       
      
        
    });

      

    app.put("/modifymember/:email", (req,res) => { 
        let firstname=req.body.firstname
        let lastname=req.body.lastname
        let  email=req.body.email.toLowerCase()
       if (req.body.password != undefined){

        let  password=passwordHash.generate(req.body.password)
        let modifiedmember={firstname,lastname,email,password}
       
        let modifiedmemberemail=req.params.email
    
        db.collection('Members').update({email:modifiedmemberemail},{$set:{...modifiedmember}},(err,data)=>{
          if (err) res.send('Member cant be modified')
          else  res.send('Member modified')
    
        })
    }

      else {

          let modifiedmember={firstname,lastname,email}
   
          let modifiedmemberemail=req.params.email

          db.collection('Members').update({email:modifiedmemberemail},{$set:{...modifiedmember}},(err,data)=>{
            if (err) res.send('Member cant be modified')
            else  res.send('Member modified')

          })

        }
    
    })  
    
    app.delete('/removemember/:email', (req,res)=>{
    
        let romovedmember = req.params.email
    
        db.collection('Members').findOneAndDelete({email :romovedmember} ,(err,data) =>{
        
        if (err) {
        res.send('Soory cant delete your Account')
        
    }
   
    else  {
        
        res.send('Account Deleted')
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, 
            service: 'gmail',
            auth: {
              user: "welcome.to.cinephilia@gmail.com", 
              pass: "cinephilia001"
            }
          });
       
       let mailOptions = {
           from: '"Cinephilia" <welcome.to.cinephilia@gmail.com>' , 
           to: romovedmember, 
           subject: "CinePhilia Delete Account Confirmation ", 
           text: "Welcome To CinePhilia", 
           html: ` hello , 
           <br/>
           <br/>
           We are Sorry to Inform you that your account has been removed !
           <br/>
           <br/>
           Goodbye !!! 
           <br/>
           <br/>
           Cinephilia Team `
         };

         transporter.sendMail(mailOptions, function(error, info){
           if(error){
              return console.log(error);
           }
           console.log('Message sent: ' + info.response);
      });
      
      transporter.close();
    
    }

}) 
})



})




app.listen(5000, (err) => {
   if (err) console.log(`connection failed`)
   else console.log(`server is running`)
})