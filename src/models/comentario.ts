import { Usuario } from "./usuario";

export class Comentario{
    id: number;
    texto: string;
    fecha: Date;
    usuario: Usuario;
    constructor(texto: string, usuario: Usuario){
        this.texto = texto;
        this.fecha = new Date(Date.now());
        this.usuario = usuario;
    }
}