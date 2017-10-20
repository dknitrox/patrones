import * as express from 'express';
import * as mongoose from 'mongoose';
const app=express();
const port=process.env.PORT || 9000;
//import api from './src/routes';
mongoose.connect('localhost:27027');

userSchema=mongoose.Schema;
user=new userSchema({
	name:string,
	apellido:string
})
let User=mongoose.model('user',userSchema);
let a=new User({
	name:"mendozaaa",
	apellido:"juanito"
});
a.save();

import { Get , Route } from 'swagger-ts';
@Route('users')
function UserController{
	@Get()
	public async getAll(req,res):void{
		let users= await User.find({});
		res.send(200,users);
	}
	return{
		getAll
	}
}

app.get('/users',UserController().getAll)

app.listen(port,()=>{
	console.log("App listen in port",port);
})