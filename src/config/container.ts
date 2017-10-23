import * as awilix from 'awilix';
import { PostulanteController } from './../controllers';
import { PostulanteService } from './../services';
import {Postulante } from './../schemas';
import { postulanteRoute,apiRoute } from './../routes';
import * as express from 'express';
const container=awilix.createContainer({
    resolutionMode:awilix.ResolutionMode.PROXY
})

container.registerClass({
postulanteController:PostulanteController,
postulanteService:PostulanteService,
postulante:Postulante
})

container.registerFunction({
postulanteRoute:postulanteRoute,

})

export default container;