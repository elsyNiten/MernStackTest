const express = require('express');
const app = express();

//Service des fichiers statiques
app.use( express.static('static'));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})
