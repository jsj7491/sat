const express = require('express'); 
const Joi = require('joi');
const querystring = require('querystring');
const app = express(); 
app.use(express.json());

const user = [
    {
        id:1,
        password:1,
        posts:"hey this is abc1"
    },
    {
        id:2,
        password:2,
        posts:"hey this is pqr"
    },
    {
        id:3,
        password:3,
        posts:"hey this is xyz"
    }
];
app.get('/users', (req,res) => {
    res.send(user);
});
app.get('/authentication/:username/:password', (req, res) => {
    const usern = user.find( (c)=> c.id === parseInt(req.params.id))
    if(!usern){
        res.status(404).send("<h1> no such user exists </h1>");
        console.log("error");
    }else{
        if(usern.password === parseInt(req.params.password)){
            res.send("login success");
        }
    }
});

app.get('/posted',(req,res) => {
    const b = user.find(pkw=> pkw.posts.contains(pkw));
    if(!b){
        res.send(b.posts);
    }else {
        res.send("not found");
    }
});

app.listen(3000, () => {        
    console.log(`Now listening on port 3000`); 
});