const express = require('express');
const app = express();


const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/heroku'));

app.get('/*', (req, res)=>{

  res.sendFile(__dirname + 'dist/heroku/index.html');
});

app.listen(PORT,() =>{
  console.log("servidor rodando na porta " + PORT);
});
