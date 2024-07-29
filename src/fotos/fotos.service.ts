import { Injectable } from '@nestjs/common';
import { Foto } from 'src/models/foto';
import { UsuarioDTO } from 'src/models/usuarioDTO';
@Injectable()
export class FotosService {
    fotos: Foto[] = [];

    /**Agrega una foto al registro de fotos.        
     * Retorna la id de la foto agregada.
    */
    crearFoto(foto: Foto): number{
        foto.id = this.asignarId();
        this.fotos.push(foto);
        return foto.id;
    }

    /**Retorna 1 + la id de la última foto del arreglo.
     * Si no hay fotos en el arreglo, retorna 1.
    */
   asignarId(): number{
    if(this.fotos.length == 0){
        return 1;
    }
    return this.fotos[this.fotos.length - 1].id + 1;
   }

   /**Retorna la foto del registro cuya id coincida con la ingresada.       
    * De no hallar coincidencias, retorna undefined.
    */
   obtenerFotoPorId(id: number): Foto{
        return this.fotos.find((foto)=> foto.id == id);    
   }

   /**Retorna un conjunto de fotos a partir de una lista de ids.*/
   obtenerConjuntoFotosPorId(listaId: number[]): Foto[]{
    let conjuntoFotos: Foto[] = [];
    for(let idFoto of listaId){
        let foto: Foto = this.obtenerFotoPorId(idFoto);
        conjuntoFotos.push(foto);
    }
    return conjuntoFotos;
   }

   /**Elimina la foto del registro cuyo id coincida con el ingresado.*/
   eliminarPorId(id: number): void{
    let indice: number = this.fotos.findIndex((foto)=> foto.id == id);
    this.fotos.splice(indice, 1);
   }

   /**Retorna el objeto usuarioDTO de la foto cuyo id coincida con el ingresado. */
   obtenerUsuarioPorIdFoto(id: number): UsuarioDTO{
    return this.obtenerFotoPorId(id).usuario;
   }
}
