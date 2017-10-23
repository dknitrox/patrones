export class PostulanteController{
	postulanteService:any;
	constructor(opts){
		this.postulanteService=opts.postulanteService;
	}
	public async getAll(req,res){
		try{
			const postulantes=await this.postulanteService.getAll();
			res.status(200).send(postulantes);
		}catch(Exception){
			res.status(400).send(Exception);
		}
	}

	public async add(req,res){
		try{
		const postulanteCreated= await this.postulanteService.create(req.body);
		res.send(200).send(postulanteCreated);
		}catch(Exception){
			res.status(400).send(Exception);
		}
	}

}