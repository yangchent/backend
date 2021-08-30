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

app.get('/', (req, res) => {
    res.send('Students');
});

app.get('/students', (req, res) => {
    const listNames= students.map(a=>a.name) ;
    res.send(`${listNames}`)
  });
    


app.post('/students', (req, res) => {
    const listSurNames= students.map(a=>a.surname) ;
    res.send(`${listSurNames}`)
  });


//app listener
app.listen(3000, () => {
  console.log('Server started on port: ' + 3000);
});