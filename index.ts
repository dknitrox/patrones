import * as express from 'express';
import * as mongoose from 'mongoose';
const app=express();
const port=process.env.PORT || 9000;
//import api from './src/routes';
mongoose.connect('mongodb://localhost:27017/app');

let userSchema=mongoose.Schema;

let user=new userSchema({
	name:{type:String},
	apellido:{type:String}
})

let User=mongoose.model('user',user);
let a=new User({
	name:"mendozaaa",
	apellido:"juanito"
});
a.save();
interface IUser{
	name:string,
	apellido:string
}
import { Get , Route } from 'swagger-ts';
@Route('users')
class UserC{
	@Get()
	 public async getAll():Promise<IUser>{
		let us= await User.find({});
		console.log("uysers",us);
		return us;
	}
}
const userController=new UserC();

app.get('/users',async (req,res)=>{
	let data=await userController.getAll();
	res.status(200).send(data);
})

app.listen(port,()=>{
	console.log("App listen in port",port);
})