const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let bugliste = [
  {status : 'Open',priority : 'P1',owner : 'Jason',title : 'app crashes on open'},
  {status : 'New',priority : 'P2',owner : 'AC',title : 'bordure ne s\'affiche pas sur les tableaux'}
];

//Service des fichiers statiques
app.use( express.static('static'));
app.use(bodyParser.json())

app.get('/api/bugs', (req, res) => {
  res.status(200).send(JSON.stringify(bugliste));
})

app.post('/api/bugs', (req,res) => {

  let serverbug = req.body;
  serverbug.title = "server : " + serverbug.title;

  bugliste.push(serverbug);
  res.json(serverbug);
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})
