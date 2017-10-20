export abstract class Postulante {
    puntajesExamenes: Array<any>=[];
    abstract getPromedioFinal(): number;
    expertise: Array<any> = [
        { expertise:'practicante',sueldo:850,promedioMax:400},
        { expertise:'junior',sueldo:1500,promedioMax:550},
        { expertise:'semi-senior',sueldo:2500,promedioMax:600},
        { expertise:'senior', sueldo:4500,promedioMax:800 },
        { experise:'libre',promedioMax:1000}
    ];

    resultado: any = { expertise: 'practicante', sueldo: '850' };
	private saludo():string{
		const mensaje:string=`How are you, ${ this.getNombreUsuario() }?`
		return mensaje;
    }
    procesarExamenes() {
        let resultadoExpertise: any = {};
        const promedio = this.getPromedioFinal();
        resultadoExpertise = this.expertise[Math.floor(Math.random() * 5)];
        return { resultado: resultadoExpertise, saludo: this.saludo() };
    }
    public promediar():number {
        let promedio:number = 0;
        this.puntajesExamenes.forEach(nota => {
            promedio += nota;
        });
        return promedio/this.puntajesExamenes.length;
    }
    public setRango(rango) { }
    abstract addNotasExamen(nota): void 
    abstract getNombreUsuario(): string
    abstract getSueldo(): number
}