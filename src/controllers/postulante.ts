import { PostulanteSchema } from './../postulante';
export function controllerPostulante(){

	async function getAll(req,res){
		try{
			const postulantes=await PostulanteSchema.find({});
			res.status(200).send(postulantes);
		}catch(Exception){
			res.status(400).send(Exception);
		}
	}

	async function add(req,res){
		try{
		const postulanteCreated= await PostulanteSchema.create(req.body);
		res.send(200).send(postulanteCreated);
		}catch(Exception){
			res.status(400).send(Exception);
		}
	}

	return {
		getAll,
		getById,
		add,
		update,
		remove,
	}
}