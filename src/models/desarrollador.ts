import {IDesarollador} from './../interfaces';
import { Postulante } from './postulante';

class Desarrollador extends Postulante implements IDesarrollador{
    nombre: string;
    apellido: string;
    anios: number;
    constructor(
        private postulante: IDesarrollador={nombre:"kevin",apellido:"mendoza",anios:10}) {
        super();
    }
    getPromedioFinal() {
        return (Math.random() * (2) + 8) * this.promediar();
    }
    getNombreUsuario() { 
        return this.postulante.nombre
    }

    getSueldo() {
        return 20.1;
    }
    getAniosExperiencia() {
        return this.postulante.anios;
    }
    addNotasExamen(nota) { 
        this.puntajesExamenes.push(nota);
    }
    
}