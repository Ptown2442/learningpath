
const Joi = require('joi');
const home = require('./routes/home');
const courses = require('./routes/courses');
const dbDebugger = require('debug')('app:db');
const startupDebugger = require('debug')('app:startup');
const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.use(express.json());
app.use('/api/courses', courses);
app.use('/', home);

app.use(function(req, res, next) {
    console.log('Logging...');
    next();
});




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));