require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (request, response) => {
    response.send('Abhishek9921');
});

app.get('/login',(req,res) => {
res.send ('<h1> Please Login at chai and code</h1>')
})

app.get('/youtube',(req,res) =>{
    res.get ("<h2>Chai and code</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})



