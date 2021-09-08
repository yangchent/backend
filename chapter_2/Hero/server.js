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
        type:[String],
    },
    color: {
        type: String,
    },    
    isAlive:{
        type:Boolean,
    }, 
    age: {
        type: Number,
    },
    image:{
        type : String,
    },    
  });
  const Hero = mongoose.model("Hero", HeroSchema);

  // Middlewares globaux
app.use(debug);

app.get('/', async (_req, res) =>{
    const heros= await Hero.find()
    res.json({
        status: 'ok',
        data: heros});
});
  
app.get('/heroes/:name', async (req, res)=> {
    const heros= await Hero.findOne({name :req.params.name})
    
      res.json({
          status : 'ok',
          data: heros,
      })
    });
    
app.get('/heroes/:name/power', async (req, res) =>{
    const heros= await Hero.findOne({name :req.params.name})
            
      res.json({
          status : 'ok',
          HeroName: heros.name,
          data: heros.power,
      })
    });

app.post('/heroes', async (req, res)=> {
    await Hero.create(req.body);
    
   res.json({message : 'ok heros, ajouté'})

  });   
  
  
  // `doc` is the document _after_ `update` was applied because of
  // `new: true`
  
app.patch('/heroes/:name/power', async (req,res)=>{
    const heroName =  req.params.name;
    const newPower = req.body.power;

    await Hero.findOneAndUpdate({name : heroName }, { $push: { power: newPower } })
    res.json({
        status : "ok",
        message :"Pouvoir ajouté!",
        data : newPower,
    })
    })

app.get('*', function(_req, res) {
    res.send('All routes - Erreur 404');
});

//app listener
app.listen(process.env.PORT, () => {
    console.log(`Server started on port`);
  });