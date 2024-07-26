import e from "express";
import { Foto } from "./foto";
export class Usuario{
    nombreUsuario: string;
    email: string;
    password: string;
    fechaRegistro: Date;
    fotoPerfil: string;  //url
    seguidores: Usuario[];
    siguiendo: Usuario[];
    fotosSubidas: Foto[];
    constructor(nombreUsuario: string, email: string, password: string, fotoPerfil: string = '', seguidores: Usuario[] = [], siguiendo: Usuario[] = [], fotosSubidas: Foto[] = []){
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.fechaRegistro = new Date(Date.now());
        this.fotoPerfil = fotoPerfil;
        this.seguidores = seguidores;
        this.siguiendo = siguiendo;
        this.fotosSubidas = fotosSubidas;
    }
}