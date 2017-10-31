export class PostulanteController{
	public postulanteService:any;
	public desarrolladorService:any;
	public diseñadorService:any;
	constructor({desarrolladorService,postulanteService,diseñadorService}){
		this.desarrolladorService=desarrolladorService;
		this.postulanteService=postulanteService;
		this.diseñadorService=diseñadorService;

	}
	public async getAll(req,res){
		try{
			//const postulantes=await this.postulanteService.getAll();
			console.log(this.desarrolladorService.getAll());
			console.log(this.postulanteService.getAll());
			console.log(this.diseñadorService.getAll());
			const desarrolladoresService=await this.desarrolladorService.getAll();
			const diseñadorService=await this.diseñadorService.getAll();	
			console.log("get all postulantes");
			res.status(200).send(Object.assign({desarrolladoresService,diseñadorService}));
		}catch(Exception){
			console.log(Exception);
			res.status(400).send(Exception);
		}
	}

	public async add(req,res){
		console.log(req.body);
		try{
		const postulanteCreated= await this.postulanteService.create(req.body.postulante);
		const camps=Object.assign({},req.body.typeBody,{id_postulante:postulanteCreated._id})
		const created:any=(req.body.type==="Diseñador")?
			await this.diseñadorService.create(camps):
			await this.desarrolladorService.create(camps);
		const resultado=(req.body.type==="Diseñador")?
			await this.diseñadorService.process(postulanteCreated._id):
			await this.desarrolladorService.process(postulanteCreated._id)
		console.log(resultado);
		return res.status(200).send(resultado);
		}catch(Exception){
			console.log("Exception",Exception)
			res.status(400).send(Exception);
		}
	}

}

