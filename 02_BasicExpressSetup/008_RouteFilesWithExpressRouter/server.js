const express = require('express');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


const app = express();
//DB Config
const db =  require('./config/db');


app.get('/', (req, res) => res.send('Hello World Router Added'));

//Use Routes
app.use('/api/users', users); //http://localhost:5000/api/users/test
app.use('/api/profile', profile); //http://localhost:5000/api/profile/test
app.use('/api/posts', posts); //http://localhost:5000/api/posts/test
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));