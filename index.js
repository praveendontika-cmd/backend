const express=require('express');
const cors= require('cors');
const bcrypt=require('bcrypt');
 
const app=express();
app.get('/',(req,res)=> {

    app.use(corsI());

    app.use(express.urleancoded({extended: true });)
    console.log(req)
    res.status(200).json({message:'sucessful'});
})
    app.post('/registeruser',(req,res)=>{
        res.status(200).json({message:'user registered'})
    }
app.listen(3000,() => {
    console.log('Server started  on port 3000!');

});