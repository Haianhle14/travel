const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const router = require('./router/index');

const app = express();
const port = 4000;


app.use(express.static(path.join(__dirname, 'resources', 'public')));


app.engine('hbs', hbs.engine({
    extname: '.hbs'
}));
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('view engine', 'hbs');

router(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
