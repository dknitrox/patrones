import * as mongoose from 'mongoose';
const Schema=mongoose.Schema;
const processSchema=new Schema({
    id_postulante:{type:Schema.Types.ObjectId,ref:"process"},
    promedioFinal:{type:Number},
    promedioParcial:{type:Number},
    sueldoFinal:{type:Number},
    expertise:{type:String}
})

export const ProcessSchema=mongoose.model('process',processSchema);