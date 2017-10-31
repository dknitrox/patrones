import {Path,GET,POST } from 'typescript-rest'
import { IPostulante } from './../interfaces';
import { PostulanteSchema } from './../schemas';
@Path('postulante')
export class PostulanteService{
    postulante:any;
    constructor(opts){
        this.postulante=PostulanteSchema;
    }
    @GET
    async getAll():Promise<Array<IPostulante>>{
        console.log("getAlUser",this.postulante);
        return await this.postulante.find({});
    }
    
    async create(user):Promise<IPostulante>{
        console.log("create user");
        return await this.postulante.create(user);
    }

}