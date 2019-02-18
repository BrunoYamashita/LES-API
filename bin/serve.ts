import express from 'express';
import cors from 'cors';

const app = express();
let routes = require('../src/routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use(function (err, req, res, next) {
  res.status(500).json({ 
    message: err.message,
    stackTrace: err.stack
  })
});

export default app;


