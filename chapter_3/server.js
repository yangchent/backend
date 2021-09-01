const express = require('express');
const multer  = require('multer');
const cors = require('cors')
const path = require("path");
const fs = require("fs");
const app = express();
const upload = multer({ dest: 'public/uploads/' });
app.use(cors());

app.use(express.static('public'));

const list= ['Dolma', 'John'];

app.get('/', (req, res) => {
    res.json({status :'ok',});
});

app.post('/user', upload.single('image'), (req, res) => {

    console.log(req.file);
     fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));
    const name = req.query.name;
    list.push(name)
    console.log(name)
    res.json({status :'ok',
            });
});

app.get('/user/list', (req, res)=>{
 console.log(list)
    res.json(list);

})
//app listener
app.listen(3000, () => {
    console.log('Server started on port: ' + 3000);
  });