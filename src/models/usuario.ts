import { Foto } from "./foto";
import { UsuarioDTO } from "./usuarioDTO";
export class Usuario{
    nombreUsuario: string;
    email: string;
    password: string;
    fechaRegistro: Date;
    fotoPerfil: string;  //url
    seguidores: UsuarioDTO[];
    siguiendo: UsuarioDTO[];
    fotosSubidas: Foto[];
    constructor(nombreUsuario: string, email: string, password: string, fotoPerfil: string = '', seguidores: UsuarioDTO[] = [], siguiendo: UsuarioDTO[] = [], fotosSubidas: Foto[] = []){
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.fechaRegistro = new Date(Date.now());
        this.fotoPerfil = fotoPerfil;
        this.seguidores = seguidores;
        this.siguiendo = siguiendo;
        this.fotosSubidas = fotosSubidas;
    }

    /**Retorna una versión modificada del objeto usuario, sin contraseña y con la información de usuarios seguidores y seguidos reducida a un arreglo
     * solo de nombres. 
     */
    static obtenerUsuarioDTO(usuario: Usuario): UsuarioDTO{
        let seguidoresDTO: UsuarioDTO[] = [];
        let seguidosDTO: UsuarioDTO[] = [];
        for(let seguidor of usuario.seguidores){
            seguidoresDTO.push({nombreUsuario: seguidor.nombreUsuario});
        }
        for(let seguido of usuario.siguiendo){
            seguidosDTO.push({nombreUsuario: seguido.nombreUsuario});
        }
        let usuarioDTO: UsuarioDTO = {    
            nombreUsuario: usuario.nombreUsuario,
            email: usuario.email,
            fechaRegistro: usuario.fechaRegistro,
            fotoPerfil: usuario.fotoPerfil,
            seguidores: seguidoresDTO,
            siguiendo: seguidosDTO,
            fotosSubidas: usuario.fotosSubidas,
        }
        return usuarioDTO;
    }
}