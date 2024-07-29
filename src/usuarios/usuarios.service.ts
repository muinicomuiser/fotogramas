import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/models/usuario';
import { UsuarioDTO } from 'src/models/usuarioDTO';

@Injectable()
export class UsuariosService {
    /**Arreglo de usuarios registrados.*/
    usuarios: Usuario[] = [];

    /**Registra un usuario nuevo.           
     * Si el registro es exitoso, retorna 1.        
     * Si el email del usuario ya existe, retorna -1.      
     * Si el nombre de usuario ya existe, retorna -2.       
     */
    registrarUsuario(usuario: Usuario): number{
        if(this.usuarios.length == 0){
            this.usuarios.push(usuario);
            return 1;
        }
        for(let usuarioRegistrado of this.usuarios){
            if(this.compararEmail(usuario, usuarioRegistrado) == true){
                return -1
            }
        }
        if(this.comprobarNombre(usuario.nombreUsuario) == true){
            return -2;
        }
        this.usuarios.push(usuario);
        return 1;
    }


    /**Compara el email entre dos usuarios.        
     * Retorna true si coinciden y false si no coinciden.       
     * Si no se ingresa un segundo usuario a comprarar, comparará el email del usuario con todo el registro de usuarios.
     */
    compararEmail(usuario: Usuario, usuarioDos?: Usuario): boolean{
        if(usuarioDos){
            if(usuario.email == usuarioDos.email){
                return true;
            }
        }
        else{
            for(let usuarioRegistrado of this.usuarios){
                if(usuario.email == usuarioRegistrado.email){
                    return true;
                }
            }
        }
        return false;
    }

    /**Comprueba si el nombre de usuario ingresado existe en una lista de usuarios.        
     * Retorna true si encuentra una coincidencia y false si no la encuentra.       
     * Si no se ingresa una lista de usuarios, comparará el nombre del usuario con toda la lista de usuarios registrados.
     */
    comprobarNombre(nombre: string, listaUsuarios?: UsuarioDTO[]): boolean{
        if(listaUsuarios){            
            if(listaUsuarios.findIndex((usuario) => usuario.nombreUsuario == nombre) != -1){
                return true;
            }
        }
        else{
            for(let usuarioRegistrado of this.usuarios){
                if(nombre == usuarioRegistrado.nombreUsuario){
                    return true;
                }
            }
        }
        return false;
    }

    /**Devuelve el usuario del registro cuyo nombre coincida con el nombre ingresado.       
     * En caso de no hallar coincidencias, retorna null.
    */
    obtenerPorNombre(nombre: string): UsuarioDTO{
        if(this.usuarios.length > 0){
            if(this.comprobarNombre(nombre) == true)
            return Usuario.obtenerUsuarioDTO(this.usuarios.find((usuario) => usuario.nombreUsuario == nombre));
        }
        return null;
    }

    /**Retorna el registro completo de usuarios como objetos usuariosDTO, sin contraseña y con los datos de seguidores y seguidos
     * reducidos solo al nombre de usuario.
     * */
    obtenerUsuarios(): UsuarioDTO[]{
        let usuariosDTO: UsuarioDTO[] = [];
        for(let usuario of this.usuarios){
            usuariosDTO.push(Usuario.obtenerUsuarioDTO(usuario));
        }
        return usuariosDTO;
    }

    /**Elimina el usuario del registro cuyo nombre coincida con el ingresado.       
     * Retorna true si hay coincidencia y se realiza la eliminación, o false si no hay coincidencias. 
    */
    eliminarUsuarioPorNombre(nombre: string): boolean{        
        let idEliminar: number = this.indiceUsuarioPorNombre(nombre);
        if(idEliminar != -1){
            this.usuarios.splice(idEliminar, 1);
            return true;
        }
        return false;
    }

    /**Busca al usuario del registro cuyo nombre coincida con el del usuarioDTO ingresado y reemplaza su foto de perfil por 
     * la del usuarioDTO.       
     * Retorna 1 si el reemplazo es exitoso.        
     * Retorna -1 si no se encuentra el usuario.        
     * Retorna -2 si no existe foto de perfil en el usuarioDTO ingresado.
    */
    reemplazarFotoPerfil(usuarioFotoNueva: UsuarioDTO): number{
        if(this.comprobarNombre(usuarioFotoNueva.nombreUsuario) == false){
            return -1;
        }
        if(usuarioFotoNueva.fotoPerfil == ""){
            return -2;
        }
        let idReemplazo: number = this.indiceUsuarioPorNombre(usuarioFotoNueva.nombreUsuario);
        this.usuarios[idReemplazo].fotoPerfil = usuarioFotoNueva.fotoPerfil;
        return 1;
    }

    /**Agrega un usuario a la lista de usuarios seguidores de otro usuario.         
     * Retorna 1 si se ha agregado exitosamente.        
     * Retorna -1 si no se encuentra el usuario a seguir.        
     * Retorna -2 si el usuario seguidor ya está en la lista de seguidores del usuario a seguir.
    */
    seguirUsuario(usuarioSeguidor: UsuarioDTO, nombreUsuarioSeguido: string): number{
        if(this.comprobarNombre(nombreUsuarioSeguido) == false){
            return -1;
        }
        let idSeguido: number = this.indiceUsuarioPorNombre(nombreUsuarioSeguido);
        let idSeguidor: number = this.indiceUsuarioPorNombre(usuarioSeguidor.nombreUsuario);
        if(this.comprobarNombre(usuarioSeguidor.nombreUsuario, this.usuarios[idSeguido].seguidores) == true){
            return -2;
        }
        this.usuarios[idSeguido].seguidores.push({nombreUsuario: usuarioSeguidor.nombreUsuario});
        this.usuarios[idSeguidor].siguiendo.push({nombreUsuario: nombreUsuarioSeguido});
        return 1;
    }

    /**Retorna el índice del usuario de una lista cuyo nombre coincida con el ingresado.        
     * Si no se define una lista de usuarios, buscará coincidencias en el registro completo de usuarios.        
     * Si no encuentra coincidencias, retorna -1.
     */
    indiceUsuarioPorNombre(nombre: string, listaUsuarios?: UsuarioDTO[]): number{
        if(listaUsuarios){
            let indice: number = listaUsuarios.findIndex((usuario) => usuario.nombreUsuario == nombre);
            return indice;
        }
        else {
            let indice: number = this.usuarios.findIndex((usuario) => usuario.nombreUsuario == nombre);
            return indice;
        }
    }
    
    /**Agrega la id de una foto al arreglo de fotos del usuario. */
    agregarFoto(usuario: UsuarioDTO, idFoto: number): void{
        let idUsuario: number = this.usuarios.findIndex((user) => user.nombreUsuario == usuario.nombreUsuario)
        this.usuarios[idUsuario].fotosSubidas.push(idFoto);
    }

    /**Retorna el arreglo de ids de fotos del usuario cuyo nombre coincida con el nombre ingresado.*/
    obtenerListaIdsFotosPorNombre(nombre: string): number[]{
        let idUsuario = this.indiceUsuarioPorNombre(nombre);
        return this.usuarios[idUsuario].fotosSubidas;
    }

    /**Elimina la foto cuyo id coincida con el ingresado, del usuario al que corresponda la foto. */
    eliminarFoto(nombre: string, idFoto: number): void{
        let idUsuario: number = this.indiceUsuarioPorNombre(nombre)
        let indiceFoto: number = this.usuarios[idUsuario].fotosSubidas.findIndex((valor)=> valor == idFoto);
        if(indiceFoto != -1){
            this.usuarios[idUsuario].fotosSubidas.splice(indiceFoto, 1);
        }
    }
}
