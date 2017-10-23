import * as mongoose from 'mongoose';
const Schema=mongoose.Schema;
const postulanteSchema=new Schema({
    nombre:String,
    apellido:String,
    anio:Number
})

export const Postulante=mongoose.model('postulante',postulanteSchema);