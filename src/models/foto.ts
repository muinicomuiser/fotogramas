import { Comentario } from "./comentario";
import { UsuarioDTO } from "./usuarioDTO";

export class Foto{
    id: number; 
    ruta: string;
    decripcion: string;
    hashtags: string;
    fechaSubida: Date;
    usuario: UsuarioDTO;
    meGusta: UsuarioDTO[];
    comentarios: Comentario[];
    constructor(ruta: string, descripcion: string, hashtags: string, usuario: UsuarioDTO, meGusta: UsuarioDTO[] = [], comentarios: Comentario[] = []){
        this.ruta = ruta;
        this.decripcion = descripcion;
        this.hashtags = hashtags;
        this.fechaSubida =  new Date(Date.now());
        this.usuario = usuario;
        this.meGusta = meGusta;
        this.comentarios = comentarios;
    }    
}