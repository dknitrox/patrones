import * as awilix from 'awilix';
import { PostulanteController,DesarrolladorController,DiseñadorController } from './../controllers';
import { PostulanteService,DesarrolladorService,DiseñadorService } from './../services';
import { PostulanteSchema,DisenadorSchema,DesarrolladorSchema,ProcessSchema } from './../schemas';
import { postulanteRoute,apiRoute } from './../routes';
import * as express from 'express';

const container=awilix.createContainer({
    resolutionMode:awilix.ResolutionMode.PROXY
})

const controllers={
    postulanteController:PostulanteController,
    desarrollaController:DesarrolladorController,
    diseñadorController:DiseñadorController 
}    
const services={
    desarrolladorService:DesarrolladorService, 
    postulanteService:PostulanteService,
    diseñadorService:DiseñadorService
}
const models={
    postulante:PostulanteSchema,
    process:ProcessSchema,
    desarrollador:DesarrolladorSchema,
    diseñador:DisenadorSchema,
}
const methods={
    postulanteRoute:postulanteRoute,
}
container.registerClass(Object.assign({},controllers,services));
container.registerFunction(Object.assign({},methods));
container.registerValue(Object.assign({},models));


export default container;


