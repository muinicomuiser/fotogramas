import { Controller, Param, Post, Get, Body, Query, Res, Delete } from '@nestjs/common';
import { FotosService } from './fotos.service';
import { Response } from 'express';
import { Foto } from 'src/models/foto';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Controller('fotos')
export class FotosController {
    constructor(private readonly servicioFotos: FotosService,
                private readonly servicioUsuarios: UsuariosService){}
    
    
    // a. Crear una nueva foto, debe verificar que el usuario exista y además agregarlo a
    // la lista de sus fotos subidas
    @Post()
    crearFoto(@Body() foto: Foto, @Res() response: Response): void{
        if(this.servicioUsuarios.buscarNombre(foto.usuario.nombreUsuario) == false){
            response.status(404).send({mensaje: "Usuario no encontrado."})
        }
        else{
            this.servicioUsuarios.agregarFoto(foto.usuario, this.servicioFotos.crearFoto(foto));
            response.status(200).send({mensaje: "Foto agregada exitosamente."})
        }
    }

    // b. Obtener una foto según su id
    @Get(':id')
    obtenerFotoPorId(@Param('id') id: number, @Res() response: Response): void{
        if(this.servicioFotos.obtenerFotoPorId(id) == undefined){
            response.status(404).send({mensaje: "La foto no existe."})
        }
        else{
            response.status(200).send(this.servicioFotos.obtenerFotoPorId(id))
        }
    }

    // c. Obtener todas las fotos según un usuario
    @Get()
    obtenerFotosUsuario(@Query('usuario') nombre: string, @Res() response: Response): void{
        if(this.servicioUsuarios.buscarNombre(nombre) == false){
            response.status(404).send({mensaje: "Usuario no encontrado."})
        }
        else {
            response.status(200).send(this.servicioFotos.obtenerConjuntoFotosPorId(this.servicioUsuarios.obtenerListaIdsFotosPorNombre(nombre)));
        }
    }

    // d. Eliminar una foto según su id
    @Delete(':id')
    eliminarPorId(@Param('id') id: number, @Res() response: Response): void{
        if(this.servicioFotos.obtenerFotoPorId(id) == undefined){
            response.status(404).send({mensaje: "La foto no existe."})
        }
        else{
            this.servicioUsuarios.eliminarFoto(this.servicioFotos.obtenerUsuarioPorIdFoto(id).nombreUsuario, id);
            this.servicioFotos.eliminarPorId(id);
            response.status(200).send({mensaje: "Foto eliminada exitosamente."})
        }
    }
}


// 15. Crea el controlador para Fotos que permita realizar las siguientes acciones
    // a. subir una nueva foto
    // b. Obtener una foto según su id
    // c. Obtener todas las fotos dado un usuario
    // d. Eliminar una foto según su id
// 16. Crea un servicio para almacenar los datos de las fotos y que permita dar soporte a las
// acciones que maneja el controlador de fotos
    // a. Crear una nueva foto, debe verificar que el usuario exista y además agregarlo a
    // la lista de sus fotos subidas
    // b. Obtener una foto según su id
    // c. Obtener todas las fotos segun un usuario
    // d. Eliminar una foto según su id