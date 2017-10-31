import * as mongoose from 'mongoose';
const Schema=mongoose.Schema;
const postulanteSchema=new Schema({
    nombre:String,
    apellido:String,
    experience:Number,
    sueldoRef:Number,
    sueldo:{type:Number,required:false},
    notas:[{
        type:Number,
    }]
})

export const PostulanteSchema=mongoose.model('postulante',postulanteSchema);