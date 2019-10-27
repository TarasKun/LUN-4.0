const express = require('express');
const app = express();
const {resolve} = require('path');

const expHbs = require('express-handlebars');
const path = require('path');

const db = require('./dataBase').getInstance();
db.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/static')));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/static'));

let { mainRouter, loginRouter } = require('./router');
let {userRouter} = require('./router');

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.use('/users', userRouter);


app.get('/', (req, res)=>{
    res.render('main');
});

app.all('*', (req, res) => {
    res.status(404).end();
});

app.listen(3000, err => {
    if (err) {
        console.log(err)
    } else console.log(3000);
});
