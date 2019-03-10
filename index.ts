import app from './bin/serve';
import http from 'http';
import mongoose from 'mongoose';

let port = process.env.PORT || '8000';
let connectionString = process.env.NODE_ENV == 'production'
  ? process.env.MONGO_HOST
  : 'mongodb://localhost/store';

mongoose.connect(connectionString).catch(err=>{
    console.log(err);
    process.exit(1)
})

http.createServer(app).listen(port,()=>{
    console.log(`Listening on ${port}`);
});
