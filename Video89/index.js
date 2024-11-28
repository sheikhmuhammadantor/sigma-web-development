const express = require('express')
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log("hey its a GET request");
  res.send('Hello World - GET !');
})

app.post('/', (req, res) => {
  console.log("hey its a post request");
  console.log(req.body)
  res.send('Hello World - POST !');
}).put('/', (req, res) => {
  console.log("hey its a PUT request");
  res.send('Hello World - PUT !');
}).delete('/', (req, res) => {
  console.log("hey its a DELETE request");
  res.send('Hello World - DELETE !');
})

app.get('/temp', (req, res) => {
  console.log('sending file to client !');
  res.sendFile('/template/temp.html', { root: __dirname })
})

app.get('/index', (req, res) => {
  console.log('sending file to client !');
  res.sendFile('/public/mypage.html', { root: __dirname })
})

app.get('/api', (req, res) => {
  res.json({ name: "antor", age: 21, skill: [{ tech: 'programming', tech2: 'Coding' }, { nonTech: '404', other: [5, 4, 8] }] })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
