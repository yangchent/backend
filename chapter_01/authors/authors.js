var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]
const express = require('express');
const app = express();

//exercise 1
app.get('/', (req, res) => {
    res.send('Authors API');
});

  //exercise 2
app.get('/authors/:id', (req, res) => {
    let nameA = req.params.id;
    res.send(`${authors[nameA].name}, ${authors[nameA].nationality}`)
  });


//exercise 3
app.get('/authors/:id/books', (req, res) => {
    let nameA = req.params.id;
    res.send(`${authors[nameA].books}`)
  });

//app listener
app.listen(3000, () => {
  console.log('Server started on port: ' + 3000);
});