export class DiseñadorController{
	diseñadorService:any;
	constructor({diseñadorService}){
		this.diseñadorService=diseñadorService;
	}
	public async getAll(req,res){
		try{
			const diseñadors=await this.diseñadorService.getAll();
			res.status(200).send(diseñadors);
		}catch(Exception){
			res.status(400).send(Exception);
		}
	}

	public async add(req,res){
		try{
		const diseñadorCreated= await this.diseñadorService.create(req.body);
		res.send(200).send(diseñadorCreated);
		}catch(Exception){
			res.status(400).send(Exception);
		}
	}

}