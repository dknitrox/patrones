import * as express from 'express';
import {postulanteRoute} from './postulante';
export const apiRoute=(router,container)=>{
    router.use('/postulantes',postulanteRoute(router,container));
    return router;
}