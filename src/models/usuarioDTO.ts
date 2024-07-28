import { Foto } from "./foto";
export type UsuarioDTO = {
    nombreUsuario: string;
    email?: string;
    fechaRegistro?: Date;
    fotoPerfil?: string;  //url
    seguidores?: UsuarioDTO[];
    siguiendo?: UsuarioDTO[];
    fotosSubidas?: Foto[];
}