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
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) =>{
    res.json('Super Heroes');
});
app.get('/heroes',(req, res)=> {
    res.json(superHeroes.map(hero=> hero.name));
  });
  
app.get('/heroes/:name',(req, res, next)=> {
      res.json(superHeroes.filter(heroes=> heroes.name === req.params.name))
      
    });
    
app.get('/heroes/:name/power',(req, res) =>{
        const heroesPower=superHeroes.filter(heroes=> heroes.name === req.params.name);
        res.json(heroesPower.map(hero=> hero.power))
      });

app.post('/heroes', transformName, (req, res)=> {
    const request1= req.body;
    superHeroes.push(request1);
   res.send('ok heros, ajouté')

  });   
app.patch('/heroes/:name/power',(req,res)=>{

    const heroess= superHeroes.find(heroes=> heroes.name === req.params.name);
    if (heroess) {
        const newPower = req.body.power;
        heroess.power.push(newPower);
    res.send("Pouvoir ajouté!")
    }
})
    
function transformName(req,res, next){
    if (req.body.name === undefined) {
        error:"add name"
    }
    req.body.name =req.body.name.toLowerCase();
    next();
}

// Middlewares globaux
const debug=(req,res,next)=>{
    console.log("server")
    next()
}
app.use(debug);


app.get('*', function(req, res) {
    res.send('All routes - Erreur 404');
});

//app listener
app.listen(PORT, () => {
    console.log(`Server started on port:  ${PORT}`);
  });