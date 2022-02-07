" use strict"
var express = require('express')
var app = express()
var cors = require('cors')

let token=["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJpdGlrYSIsInBhc3N3b3JkIjoiMjAwIn0.76nTaRT7MKKY2hdFX4eRsIl6KGUneXyETsg_Mrb8EGE"]

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/v1/weather',get_weather_v1)
app.get('/v1/hello',get_hello)
app.post('/v1/auth',post_auth)

function get_weather_v1(request, response)
{
     let tokenn= req.query.tokenn
        //let d1=request.body.expires
        if(token.includes(tokenn))
        {
          response.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":282.61,"feels_like":282.61,"temp_min":280.58,"temp_max":285.29,"pressure":1018,"humidity":84},"visibility":10000,"wind":{"speed":0.89,"deg":225,"gust":0.89},"clouds":{"all":0},"dt":1642038331,"sys":{"type":2,"id":2040223,"country":"US","sunrise":1642002454,"sunset":1642035291},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
        }
}

function get_hello(req,res)
{
     let tokenn= req.query.tokenn
        //let d1=request.body.expires
        if(token.includes(tokenn))
        {
    res.json({"Heya": " How you Doing?"})
        }
}

function post_auth(req,res)
{
    let usernames = ['Ritika','Vishwas','Shreya']
    let passwords = ['200','300','400']
    let username = req.body.username
    let pwd = req.body.password

    if(usernames.includes(username)){
      if(passwords.includes(pwd)){
          res.json({ "Sucess" : "Your API key is here: Scratch here", "access-token": token, "expires": "2022-02-20T22:25:42.142Z"})
      }
  }
}

app.listen(3000)
console.log('Server is running on port 3000')

