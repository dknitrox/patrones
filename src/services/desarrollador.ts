import {Path,GET,POST } from 'typescript-rest'
import { IDesarrollador } from './../interfaces';
import { Postulante } from './../models/postulante';
import { DesarrolladorSchema,PostulanteSchema} from './../schemas';
import * as mongoose from 'mongoose';
@Path('desarrollador')
export class DesarrolladorService extends Postulante implements IDesarrollador{
    nombre: string;
    apellido: string;
    experience: number;
    sueldoDef:number;
    frontWorks;
    backWorks;
    movileWorks;
    titlesDevelop;

    postulante:any;
    desarrollador:any;
    procesarExamenes:any;
    constructor(opts){
        super(process,PostulanteSchema);        
        this.desarrollador=DesarrolladorSchema;
        this.postulante=PostulanteSchema;
    }


    async setPromedioFinalProcess(_id):Promise<any>{

        const prom:any=await this.getPromedioPartialProcess(_id);
        const resultado=(Math.random() * (2) + 8) * prom.promedioParcial ;
        const res=this.expertiseMock.reduce((first,next)=>{
            return next.promedioMin<=resultado?next:first
        
        })
//        console.log(mongoose.Types.ObjectId.isValid(_id));
        console.log(resultado,res);
        return await this.procesarExamenes
        .findOneAndUpdate({
            id_postulante:_id
        },{
            $set:{
                promedioFinal:resultado,
                expertise:res.expertise,
                sueldoFinal:res.sueldo?res.sueldo:10000
            }
        });
    
    }

   async setSueldoProcess(_id,sueldo):Promise<number>{
     
        const notas=await this.procesarExamenes.findOne(
            {id_postulante:_id},
        ).select('notas');
        const cantidad=notas.length;
        return await this.procesarExamenes.findOneAndUpdate(
            {id_postulante:_id},
            {$set:{sueldoFinal:sueldo}}
        ).select('sueldoFinal');
        
    }
    
    async setExpertiseProcess(_id,expertise):Promise<string>{
        return await this.procesarExamenes
        .findByIdAndUpdate(
            {id_postulante:_id},
        ).select('expertise');

    }
    async addNotasExamen(_id,nota):Promise<string> { 
        const postulante_id=await this.desarrollador.findById({
            id_postulante:_id
        },
        {
            id_postulante:1
        })

        return await this.postulante.findOneAndUpdate({
            _id:postulante_id
        },
        {
            $push:{
                notas:nota
            }
        })
        .select('_id')
        
    }

    
    async setPromedioPartialProcess(_id):Promise<any>{
        const notas=await this.postulante.findOne(
            {_id:_id},
        ).
        populate('id_postulante')
        .select('notas');
        console.log("notas",notas.notas);
        const cantidad=notas.notas.length;
        const promedioParcial:number=notas.notas.reduce((sum,actual)=>{
            return sum+=actual;
        })
        console.log("promedioParcial set",promedioParcial);
       return await this.procesarExamenes.create(
            {id_postulante:_id,promedioParcial:promedioParcial/3}
        )


    }
   
    
}