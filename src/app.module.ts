import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { FotosController } from './fotos/fotos.controller';
import { ComentariosController } from './comentarios/comentarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { FotosService } from './fotos/fotos.service';
import { ComentariosService } from './comentarios/comentarios.service';

@Module({
  imports: [],
  controllers: [AppController, UsuariosController, FotosController, ComentariosController],
  providers: [AppService, UsuariosService, FotosService, ComentariosService],
})
export class AppModule {}
