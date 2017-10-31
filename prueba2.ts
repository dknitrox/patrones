import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
const app=express();
const port=process.env.PORT || 8900;
import { Server } from 'typescript-rest';
import container from './src/config/container';
import {apiRoute }from './src/routes';
import * as bodyParser from 'body-parser';
console.log("inicio");
mongoose.connect('mongodb://localhost:27017/di');
app.use(bodyParser.json());
app.use(cors());
console.log("fin");
app.use('/api',apiRoute(express.Router(),container));
Server.swagger(app, './dist/swagger.yaml', '/api-docs', 'localhost:5674', ['http']);

app.listen(port,()=>{
	console.log("App listen in port",port);
})