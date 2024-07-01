const express = require('express');
const app = express();

PORT = process.env.PORT

app.get('/', (req, res) => {
  return res.send('Ok')
})

app.get('/hello', (req, res) => {
  const { name } = req.query

  return res.send(`Hola ${name}`)
})


app.listen(PORT || 3009, () => {
  console.log(`Server listening in port ${PORT || 3009}`)
})