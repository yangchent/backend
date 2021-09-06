var students = [
    {
        name: "Peter",
        surname: "Andrews",
        nationality: "UK",
    },
    {
        name: "Sandra",
        surname: "bullocks",
        nationality: "UK",
    },
    {
        name: "Anne",
        surname: "Froncoise",
        nationality: "US",
    },
    {
        name: "Julie",
        surname: "Martin",
        nationality: "France",
    },
]
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({status :'ok',
            data : students});
});

app.get('/students', (req, res) => {
    const listNames= students.map(a=>a.name) ;
    res.json(listNames)
  });

app.post('/students', (req, res) => {
    const newStudent= req.body;
    students.push(newStudent)
    res.json({
        status: "ok",
        message: "new student added",
        data: newStudent,
    })
  });


//app listener
app.listen(3000, () => {
  console.log('Server started on port: ' + 3000);
});