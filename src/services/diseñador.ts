import {Path,GET,POST } from 'typescript-rest'
import { IDiseñador } from './../interfaces';
import { DisenadorSchema,PostulanteSchema } from './../schemas';
import { Postulante } from './../models';
import * as mongoose from 'mongoose';
@Path('diseñador')
export class DiseñadorService extends Postulante{
    nombre: string;
    apellido: string;
    experience: number;
    sueldoDef:number;
    UI:number;
    UX:number;

    postulante:any;
    diseñador:any;
    procesarExamenes:any;
    constructor(opts){
        super(process,DisenadorSchema);        
        this.diseñador=DisenadorSchema;
        this.postulante=PostulanteSchema;
    }

    async setPromedioFinalProcess(_id):Promise<any>{

        const prom:any=await this.getPromedioPartialProcess(_id);
        console.log("antes promedio partial",prom);
        const resultado=(Math.random() * (2) + 8) * prom.promedioParcial ;
        const res=this.expertiseMock.reduce((first,next)=>{
            return next.promedioMin<=resultado?next:first
        })
        
        console.log("justo antes del await");
        console.log(mongoose.Types.ObjectId.isValid(_id));
        console.log(resultado,res);
        return await this.procesarExamenes
        .findOneAndUpdate({
            id_postulante:_id
        },{
            $set:{
                promedioFinal:resultado,
                expertise:res.expertise,
                sueldoFinal:res.sueldo?res.sueldo:8000
            }
        });
    
    }

    async process(_id):Promise<any>{
        await this.setPromedioPartialProcess(_id);
        console.log("paso promedio partial");
        await this.setPromedioFinalProcess(_id);
        return await this.getProcess(_id);
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
    async getSueldo(_id):Promise<number>{
        return await this.diseñador
        .findById({_id_postulante:_id})    
        .populate('id_postulante')
        .select('id_postulante.sueldo')
    }
    async getAniosExperiencia(_id):Promise<number> {
        return await this.diseñador
        .findById({_id_postulante:_id})    
        .populate('id_postulante')
        .select('id_postulante.anios')
    }
    async addNotasExamen(_id,nota):Promise<string> { 
        const postulante_id=await this.diseñador.findById({
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