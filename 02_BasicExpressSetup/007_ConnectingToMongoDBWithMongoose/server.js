const express = require('express');
const app = express();
//DB Config
const db =  require('./config/db');


app.get('/', (req, res) => res.send('Hello DB Connected'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));