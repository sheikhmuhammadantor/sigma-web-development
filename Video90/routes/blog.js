const express = require('express');
const router = express.Router();
const app = express();
const fs = require('fs');


app.use((req, res, next) => {
  console.log(`${Date.now()} is a ${req.method}`);
  fs.writeFileSync('logs.txt', `${Date.now()} is a ${req.method}`);
  next() // Transfer Req to next Req ('/') ;
})

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('Blog About')
})

module.exports = router
