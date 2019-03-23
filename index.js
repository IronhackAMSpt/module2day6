const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use('/', (req, res, next)=> {
    console.log(req.url);
    next();
})

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    console.log(req.url);
    res.send("ok");
});

app.get('/searchpage', (req, res, next) => {
    res.render('searchpage');
});

app.post('/search', (req, res, next) => {
    console.log(req.body);
    res.send(`the search is for ${req.body.search} and color is: ${req.body.color}`);
})

app.get('/profile/:profilename/post/:post', (req, res) => {
    console.log(req.params)
    res.send('profile page of: ' + req.params.profilename);
});

app.listen(3000, () => {
    console.log("app started listening on port 3000");
})