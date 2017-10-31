import * as mongoose from 'mongoose';
const Schema=mongoose.Schema;
const desarrolladorSchema=new Schema({
    id_postulante:{type:Schema.ObjectId,ref:"postulante"},
    frontWorks:Number,
    backWorks:Number,
    movileWorks:Number,
    titlesDevelop:Number,

})

export const DesarrolladorSchema=mongoose.model('desarrollador',desarrolladorSchema);