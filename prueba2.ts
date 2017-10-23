import * as express from 'express';
import * as mongoose from 'mongoose';
const app=express();
const port=process.env.PORT || 9000;
import { Server } from 'typescript-rest';
import container from './src/config/container';
import {apiRoute }from './src/routes';

mongoose.connect('mongodb://localhost:27017/di');
console.log(container);
app.use('/api',apiRoute(express.Router(),container));
Server.swagger(app, './dist/swagger.yaml', '/api-docs', 'localhost:5674', ['http']);

app.listen(port,()=>{
	console.log("App listen in port",port);
})