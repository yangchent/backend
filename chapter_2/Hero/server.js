var superHeroes= [
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricty", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]
const express = require('express');
const app = express();
const debug = require('./debug');
app.use(express.json());

//dotenv
const dotenv = require("dotenv");
dotenv.config({
	path: "../../config.env",
});
const mongoose = require("mongoose");

//connetion to mongoose
mongoose
	.connect(process.env.DB, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Connected to MongoDB !");
	});

  //Mongoose Schema 
  const HeroSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    power:{
      type: String,
    },
  });
  const Hero = mongoose.model("Hero", HeroSchema);
// Middlewares globaux
app.use(debug);

app.get('/heroes', (_req, res) =>{
    res.json({
        status: 'ok',
        data: superHeroes});
});
  
app.get('/heroes/:name',(req, res)=> {
    const nameHero= req.params.name;

    const hero= superHeroes.find(
        (obj)=> obj.name.toLowerCase().replace(" ", "")) === nameHero.toLowerCase();
      res.json({
          status : 'ok',
          data:hero,
      })
    });
    
app.get('/heroes/:name/power',(req, res) =>{
    const nameHero= req.params.name;
    const hero= superHeroes.find(
        (obj)=> obj.name.toLowerCase().replace(" ", ""))===nameHero.toLowerCase();
      res.json({
          status : 'ok',
          HeroName: hero,
          data: hero.power,
      })
      
    });

app.post('/heroes', transformName, (req, res)=> {
    const request1= req.body;
    superHeroes.push(request1);
    console.log(request1)
   res.json({message : 'ok heros, ajouté'})

  });   
app.patch('/heroes/:name/power',(req,res)=>{
    const nameHero= req.params.name;

    let heroess= superHeroes.find(
        (obj)=> obj.name.toLowerCase().replace(" ", ""))===nameHero.toLowerCase();
    if (heroess) {
        const newPower = req.body.power;
        heroess.power.push(newPower);
    res.json({
        status : "ok",
        message :"Pouvoir ajouté!",
        data : heroess,
    })
    }
});
function transformName(req,_res, next){
    if (req.body.name === undefined) {
        error:"add name"
    }
    req.body.name =req.body.name.toLowerCase();
    next();
}

app.get('*', function(_req, res) {
    res.send('All routes - Erreur 404');
});

//app listener
app.listen(process.env.PORT, () => {
    console.log(`Server started on port`);
  });