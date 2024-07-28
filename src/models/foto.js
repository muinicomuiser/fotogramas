"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foto = void 0;
var Foto = /** @class */ (function () {
    function Foto(ruta, descripcion, hashtags, usuario, meGusta, comentarios) {
        if (meGusta === void 0) { meGusta = []; }
        if (comentarios === void 0) { comentarios = []; }
        this.ruta = ruta;
        this.decripcion = descripcion;
        this.hashtags = hashtags;
        this.fechaSubida = new Date(Date.now());
        this.usuario = usuario;
        this.meGusta = meGusta;
        this.comentarios = comentarios;
    }
    return Foto;
}());
exports.Foto = Foto;
