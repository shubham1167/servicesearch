const express = require('express');
const { title, off } = require('process');
const mongoose = require('mongoose');
const Shop = require('./models/shop'); 


const app = express();

app.set('view engine','ejs');
   
//mongodb connection 

const db = 'mongodb+srv://shubham:shubham123@servicesearch.iugoy.mongodb.net/servicesearch?retryWrites=true&w=majority'

mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err)); 

//Static Middleware
app.use(express.static('Public'));
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res) =>{
    res.render('page1', {title:'Home'});
})

app.get('/area-brand',(req,res) =>{

        Shop.find().sort({createdAt: -1})
        .then((result)=>{
            res.render('page2', {shops:result})
        })
        .catch((err) => {
            console.log(err);
        });
        
})      


app.get('/official-stores',(req,res) =>{
    res.render('page3', {title:'Official Stores'});
})

app.get('/local-stores',(req,res) =>{
    res.render('page4', {title:'Local Stores'});
})

app.use((req,res)=>{
    res.status(404).render('404');
})

