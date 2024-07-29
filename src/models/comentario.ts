import { Usuario } from "./usuario";
import { UsuarioDTO } from "./usuarioDTO";

export class Comentario{
    id: number;
    texto: string;
    fecha: Date;
    usuario: UsuarioDTO;
    constructor(texto: string, usuario: UsuarioDTO){
        this.texto = texto;
        this.fecha = new Date(Date.now());
        this.usuario = usuario;
    }
}