import * as mongoose from 'mongoose';
const Schema=mongoose.Schema;
const diseñadorSchema=new Schema({
    UI:Number,
    UX:Number,
    id_postulante:{type:Schema.Types.ObjectId,ref:"postulante"}
})

export const DisenadorSchema=mongoose.model('disenador',diseñadorSchema);