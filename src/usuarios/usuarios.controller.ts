import { Controller, Post, Body, Param, Get, Delete, Put, Res, Patch } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from 'src/models/usuario';
import { Response } from 'express';
import { UsuarioDTO } from 'src/models/usuarioDTO';


@Controller('usuarios')
export class UsuariosController {
    
    constructor(private readonly servicioUsuarios: UsuariosService){}

    /**a. Registrar un nuevo usuario (Verificar si existe el usuario según el correo
    ingresado y que el nombreUsuario sea único).*/
    @Post()
    registrarUsuario(@Body() usuario: Usuario, @Res() response: Response){
        if(this.servicioUsuarios.registrarUsuario(usuario) == 1){
            response.status(201).send({mensaje: "Usuario creado exitosamente"});
        }
        else if(this.servicioUsuarios.registrarUsuario(usuario) == -1){
            response.status(400).send({mensaje: "El email ingresado ya está registrado."});
        }
        else if(this.servicioUsuarios.registrarUsuario(usuario) == -2){
            response.status(400).send({mensaje: "El nombre de usuario ya existe."});
        }
    }

    /**b. Obtener un usuario según su nombreUsuario, en caso de que el usuario no exista
     devolver el código 404.*/
    @Get(':nombreUsuario')
    obtenerPorNombre(@Param('nombreUsuario') nombre: string, @Res() response: Response): void{
        if(this.servicioUsuarios.obtenerPorNombre(nombre)){
            response.status(200).send(this.servicioUsuarios.obtenerPorNombre(nombre))
        }
        else{
            response.status(404).send({mensaje: "Usuario no encontrado."})
        }
    }

    /**c. Obtener todos los usuarios (Excluir la password en la lista ) */
    @Get()
    obtenerUsuarios(@Res() response: Response): void{
        response.status(200).send(this.servicioUsuarios.obtenerUsuarios())
    }

    /**d. Eliminar un usuario según su nombreUsuario */
    @Delete(':nombreUsuario')
    eliminarUsuario(@Param('nombreUsuario') nombre: string, @Res() response: Response): void{
        if(this.servicioUsuarios.eliminarUsuarioPorNombre(nombre) == true){
            response.status(200).send({mensaje: "Usuario eliminado exitosamente."});
        }
        else{
            response.status(404).send({mensaje: "No existe un usuario con ese nombre."});
        }
    }

    /**e. Editar foto de perfil.*/
    @Put('perfil')
    reemplazarFotoPerfil(@Body() usuarioFotoReemplazo: UsuarioDTO, @Res() response: Response): void{
        if(this.servicioUsuarios.reemplazarFotoPerfil(usuarioFotoReemplazo) == 1){
            response.status(200).send({mensaje: "Foto de perfil reemplazada exitosamente"});
        }
        else if(this.servicioUsuarios.reemplazarFotoPerfil(usuarioFotoReemplazo) == -1){
            response.status(404).send({mensaje: "El usuario no existe."});
        }
        else if(this.servicioUsuarios.reemplazarFotoPerfil(usuarioFotoReemplazo) == -2){
            response.status(400).send({mensaje: "No se ha ingresado una foto para reemplazar."});
        }
    }
    
    /**f. Seguir a un usuario (Debe validar que el usuario al que se desea seguir exista y que no tenga como seguidor al usuario solicitante)*/
    @Put('seguir/:nombre')
    seguirUsuario(@Body() usuarioSeguidor: UsuarioDTO, @Param('nombre') nombreUsuarioSeguido: string, @Res() response: Response): void{
        if(this.servicioUsuarios.seguirUsuario(usuarioSeguidor, nombreUsuarioSeguido) == 1){
            response.status(200).send({mensaje: "Usuario seguido exitosamente."});
        }
        else if(this.servicioUsuarios.seguirUsuario(usuarioSeguidor, nombreUsuarioSeguido) == -1){
            response.status(404).send({mensaje: "El usuario no existe."});
        }
        else if(this.servicioUsuarios.seguirUsuario(usuarioSeguidor, nombreUsuarioSeguido) == -2){
            response.status(400).send({mensaje: "Ya se sigue al usuario."});
        }
    }
}

// 8. Crea el controlador para Usuarios que permita realizar las siguientes acciones
//     **a. Registrar un nuevo usuario
//     **b. Obtener un usuario según su nombreUsuario
//     **c. Obtener todos los usuarios
//     **d. Eliminar un usuario según su nombreUsuario
//     **e. Editar foto de perfil
//     **f. Seguir a un usuario

// 9. Crea un servicio para almacenar los datos de los usuarios y que permita dar soporte a
// las acciones que maneja el controlador de usuarios
//     **a. Registrar un nuevo usuario (Verificar si existe el usuario según el correo
//     ingresado y que el nombreUsuario sea único)
//     **b. Obtener un usuario según su nombreUsuario, en caso de que el usuario no exista
//     devolver el código 404.
//     **c. Obtener todos los usuarios (Excluir la password en la lista )
//     **d. Eliminar un usuarios según su nombreUsuario
//     **e. Editar foto de perfil (Solo debe permitir actualizar este campo)
//     **f. Seguir a un usuario (Debe validar que el usuario al que se desea seguir exista y que
//     no tenga como seguidor al usuario solicitante )