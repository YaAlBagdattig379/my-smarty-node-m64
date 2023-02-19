const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('hello data we are testing by smarty node hello')
})
const users = [
    {id:1,name:'sabana',email:'sabana@gmail.com',phone:'342342342342'},
    {id:2,name:'sabina',email:'sabina@gmail.com',phone:'342342342342'},
    {id:3,name:'salina',email:'salina@gmail.com',phone:'342342342342'},
    {id:4,name:'sampa',email:'sampa@gmail.com',phone:'342342342342'},
    {id:5,name:'samiya',email:'samiya@gmail.com',phone:'342342342342'},
    {id:6,name:'sorifa',email:'sorifa@gmail.com',phone:'342342342342'},
    {id:7,name:'sabrina',email:'sabrina@gmail.com',phone:'342342342342'},
    {id:8,name:'sabia',email:'sabia@gmail.com',phone:'342342342342'}
]
app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/users/:id',(req,res)=>{
    console.log(req.params)
    const id =  parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    res.send(user) ;
    // res.send('finding users')
})

 
app.listen(port,()=>{
    console.log('listening to  port from my smarty',port)
})