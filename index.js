const express=require('express');
const cors= require('cors');
const bcrypt=require('bcrypt');
 
const app=express();
app.get('/',(req,res)=> 
    {
    console.log(req)
    res.status(200).json({message:'sucessful'});
})
app.listen(3000,() => {
    console.log('Server started  on port 3000!');
});