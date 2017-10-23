import {Path,GET,POST } from 'typescript-rest'
import { IPostulante } from './../interfaces';
@Path('postulante')
export class PostulanteService{
    postulante:any;
    constructor(opts){
        this.postulante=opts.postulante;
    }
    @GET
    async getAll():Promise<Array<IPostulante>>{
        return await this.postulante.find({});
    }
    
    async create(user):Promise<IPostulante>{
        return await this.postulante.create(user);
    }

}