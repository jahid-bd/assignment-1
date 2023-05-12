const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes');
const app = express();

const port = 4000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(cors());

app.use(router);

app.listen(port, () => {
  console.log(`App is listning on port ${port}`);
});
