export class DesarrolladorController{
	desarrolladorService:any;
	constructor(opts){
		this.desarrolladorService=opts.desarrolladorService;
	}
	public async getAll(req,res){
		try{
			const desarrolladors=await this.desarrolladorService.getAll();
			res.status(200).send(desarrolladors);
		}catch(Exception){
			res.status(400).send(Exception);
		}
	}

	public async add(req,res){
		try{
		const desarrolladorCreated= await this.desarrolladorService.create(req.body);
		res.send(200).send(desarrolladorCreated);
		}catch(Exception){
			res.status(400).send(Exception);
		}
	}

}