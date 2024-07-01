const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
PORT = process.env.PORT

app.use(express.json())
app.use(cors())

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