const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const router = require('./router/index');
const db = require('./config/db/index')
const methodOverride = require('method-override');


const app = express();
const port = 4000;

db.connect();

app.use(express.json());
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'resources', 'public')));

app.engine(
  'hbs',
  hbs.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    }
  }),
);
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('view engine', 'hbs');

router(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
