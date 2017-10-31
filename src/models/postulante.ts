import { ProcessSchema } from './../schemas';
export abstract class Postulante {
    puntajesExamenes: Array<any>=[];
    procesarExamenes:any;
    schema:any;
    constructor(process,schema){
        this.procesarExamenes=ProcessSchema;
        this.schema=schema;
    }
    expertiseMock: Array<any> = [
        { expertise:'practicante',sueldo:850,promedioMin:400},
        { expertise:'junior',sueldo:1500,promedioMin:550},
        { expertise:'semi-senior',sueldo:2500,promedioMin:600},
        { expertise:'senior', sueldo:4500,promedioMin:800 },
        { expertise:'libre',promedioMin:950}
    ];

    resultado: any = { expertise: 'practicante', sueldo: '850' };
	private saludo(_id):string{
        const nombre=this.getNombreUsuario(_id);
		const mensaje:string=`Bienvenido ${nombre}?`
		return mensaje;
    }
    private pendiente(_id):string{
        const nombre=this.getNombreUsuario(_id);
        const mensaje:string=`Sus resultados estaran siendo procesados ${nombre}`;
        return mensaje;
    }
    private procesado(_id):string{
        const nombre=this.getNombreUsuario(_id);
        const mensaje:string=`Su resultado fue procesado ${nombre}`;
        return mensaje;
    }
    private async asignarSueldo(_id):Promise<any>{
        const rango=await this.getExpertiseProcess(_id);
        const process=await this.procesarExamenes.findOneAndUpdate(
            {id_postulante:_id},
            {set:{expertise:rango}}
        );
        return process;
    }
    public async getAll(){
        return await this.schema.find({})
        .populate('postulante_id');

    }


    public async getNombreUsuario(_id):Promise<any> { 
        const schema=await this.schema
            .findById({_id_postulante:_id})    
            .populate('id_postulante')
            .select('id_postulante.nombre')
        return schema;
    }

    public async create(model):Promise<any>{
        return await this.schema.create(model);
    }
    

    public async getSueldo(_id):Promise<number>{
        return await this.schema
        .findById({_id_postulante:_id})    
        .populate('id_postulante')
        .select('id_postulante.sueldo')
    }
    public async getAniosExperiencia(_id):Promise<number> {
        return await this.schema
        .findById({_id_postulante:_id})    
        .populate('id_postulante')
        .select('id_postulante.anios')
    }

    public async getProcess(_id):Promise<any>{    
        return await this.procesarExamenes.findOne({id_postulante:_id})
    }
    async getPromedioFinalProcess(_id):Promise<number> {
        const promedioFinal=await this.procesarExamenes.findOne({id_postulante:_id},{promedioFinal:1});
        return promedioFinal;    
    }
    
    async getPromedioPartialProcess(_id):Promise<any>{
        const data=await this.procesarExamenes.findOne({
            id_postulante:_id
        })
        return data;
    }
    async getExpertiseProcess(_id):Promise<string>{
        return await this.procesarExamenes
                 .findById(
                     {id_postulante:_id},
                 ).select('expertise');
     }

    async process(_id):Promise<any>{
        await this.setPromedioPartialProcess(_id);
        await this.setPromedioFinalProcess(_id);
        return await this.getProcess(_id);
    }

    async abstract setPromedioFinalProcess(_id):Promise<any>;    
    async abstract setExpertiseProcess(_id,rango):Promise<string>;
    async abstract addNotasExamen(_id,nota):Promise<string>;
    async abstract setPromedioPartialProcess(_id):Promise<number>
    
}