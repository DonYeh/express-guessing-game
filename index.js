/* 

    Create a guessing game using express
    You'll need all the same pieces as the templating exercise, but also:

    a route and a controller for a GET request that res.renders a form
    a corresponding route and a controller for a POST request that processes the form
    check a value in req.body to see if it matches a random number between 1 and 10
    if it does, res.redirect them to a "congratulations" page
    if it does not, res.render the template, but with a message to try again

*/


const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const app = express();

const port = 4004;

// middleware
app.engine('html', es6Renderer);
app.set('view engine', 'html');
app.set('views', 'views')

app.get('/music', (req, res) => {
    //should render a template
    console.log('you are inside /music');
    res.render('music')

});

// code a corresponding route and a controler for a POST request that processes the form


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});