import express from 'express';
import cors from 'cors';

const app = express();
import Route from '../src/routes/Routes';
const routes = new Route();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes.getRoutes());
app.use(function (err, req, res, next) {
  res.status(500).json({ 
    message: err.message,
    stackTrace: err.stack
  })
});

export default app;


