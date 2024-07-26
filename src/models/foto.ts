import { Comentario } from "./comentario";
import { Usuario } from "./usuario";

export class Foto{
    id: number; 
    ruta: string;
    decripcion: string;
    hashtags: string;
    fechaSubida: Date;
    usuario: Usuario;
    meGusta: Usuario[];
    comentarios: Comentario[];
    constructor(ruta: string, descripcion: string, hashtags: string, usuario: Usuario, meGusta: Usuario[] = [], comentarios: Comentario[] = []){
        this.ruta = ruta;
        this.decripcion = descripcion;
        this.hashtags = hashtags;
        this.fechaSubida =  new Date(Date.now());
        this.usuario = usuario;
        this.meGusta = meGusta;
        this.comentarios = comentarios;
    }    
}