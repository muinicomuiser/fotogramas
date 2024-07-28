"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comentario = void 0;
var Comentario = /** @class */ (function () {
    function Comentario(texto, usuario) {
        this.texto = texto;
        this.fecha = new Date(Date.now());
        this.usuario = usuario;
    }
    return Comentario;
}());
exports.Comentario = Comentario;
