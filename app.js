const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const customers = require('./routes/customersRoutes');
const movies = require('./routes/moviesRoutes');
const genres = require('./routes/genresRoutes');
const users = require('./routes/usersRoutes');
const morgan = require('morgan');
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/cinema")
.then(() => console.log('connected to database...'))
.catch(err => console.error('could not connect to mongodb....'));

//invoking express as a middleware function
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(helmet());
app.use('/api/v1/customers', customers);
app.use('/api/v1/movies', movies);
app.use('/api/v1/genres', genres);
app.use('/api/v1/users', users)

// setting up the middleware in our global application
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));