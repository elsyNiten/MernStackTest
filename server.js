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
  bugliste.push(req.body);
  res.json(bugliste)
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})
