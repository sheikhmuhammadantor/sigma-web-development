const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/:slag/:slag2?', (req, res) => {
    // For This URL : http://localhost:3000/Js/developer
    // Output : Hello - The Slag Is : Js and developer
    res.send(`Hello - The Slag Is : ${req.params.slag} and ${req.params.slag2}`);
})


app.get('/', (req, res) => {
    // For This URL : http://localhost:3000/?them=dark&resone=bd
    // Output : { them: 'dark', resone: 'bd' }
    console.log(req.query);
    res.send('Hello World!');
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
