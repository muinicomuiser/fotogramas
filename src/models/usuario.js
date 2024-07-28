"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nombreUsuario, email, password, fotoPerfil, seguidores, siguiendo, fotosSubidas) {
        if (fotoPerfil === void 0) { fotoPerfil = ''; }
        if (seguidores === void 0) { seguidores = []; }
        if (siguiendo === void 0) { siguiendo = []; }
        if (fotosSubidas === void 0) { fotosSubidas = []; }
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
    Usuario.obtenerUsuarioDTO = function (usuario) {
        var seguidoresDTO = [];
        var seguidosDTO = [];
        for (var _i = 0, _a = usuario.seguidores; _i < _a.length; _i++) {
            var seguidor = _a[_i];
            seguidoresDTO.push({ nombreUsuario: seguidor.nombreUsuario });
        }
        for (var _b = 0, _c = usuario.siguiendo; _b < _c.length; _b++) {
            var seguido = _c[_b];
            seguidosDTO.push({ nombreUsuario: seguido.nombreUsuario });
        }
        var usuarioDTO = {
            nombreUsuario: usuario.nombreUsuario,
            email: usuario.email,
            fechaRegistro: usuario.fechaRegistro,
            fotoPerfil: usuario.fotoPerfil,
            seguidores: seguidoresDTO,
            siguiendo: seguidosDTO,
            fotosSubidas: usuario.fotosSubidas,
        };
        return usuarioDTO;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
