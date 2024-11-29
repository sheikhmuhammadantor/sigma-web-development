const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const blog = require('./routes/blog');

// app.use(express.json());
// app.use(express.static('public'));
app.use('/blog', blog);

app.use((req, res, next) => {
  req.tolha = "I Am Antor Vie";
  console.log(req.tolha)
  // fs.writeFileSync('logs.txt', `${Date.now()} is a ${req.method}`);
  // Request will stop here if res will send here.
  // res.send('It will send respond this text, and stop req Transformation; ')
  next() // Transfer Req to next Middleware ;
})

app.use((req, res, next) => {
  console.log(`${Date.now()} is a ${req.method}`);
  next() // Transfer Req to next Req ('/') ;
})

app.get('/', (req, res) => {
  res.send('Hello World !')
})

// app.get('/blog', (req, res) => {
//   res.send('Hello World !' + req.tolha)
// })

app.get('/about', (req, res) => {
  res.send('Hello World !' + req.tolha)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
