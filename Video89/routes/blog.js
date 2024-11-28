const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('Blog About')
})

// define the about route
router.get('/:id', (req, res) => {
  res.send(`Blog For Id : ${req.params.id}`);
})

module.exports = router
