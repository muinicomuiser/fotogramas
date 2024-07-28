"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_1 = require("./usuario");
var comentario_1 = require("./comentario");
var foto_1 = require("./foto");
var usuario1 = new usuario_1.Usuario("juan", "correo.com", "hola23", "sdkjs3d.com");
var usuario2 = new usuario_1.Usuario("pedro", "maildos.com", "hola324", "sdkasdhd.com");
var usuario3 = new usuario_1.Usuario("juana", "mail3.com", "hol23a23", "sdds.com");
var usuario4 = new usuario_1.Usuario("pedra", "mail.com", "ho23lda23", "kjkj.com");
var comentario1 = new comentario_1.Comentario("muy weno", usuario1);
var comentario2 = new comentario_1.Comentario("bien weno", usuario2);
var comentario3 = new comentario_1.Comentario("bastante weno", usuario3);
var comentario4 = new comentario_1.Comentario("terrible weno", usuario4);
var foto1 = new foto_1.Foto("kkkkk.com", "mi foto 1", "#foto #primera", usuario1, [], [comentario1, comentario2]);
var foto2 = new foto_1.Foto("dddd.com", "mi foto 2", "#foto #primera", usuario1, [], [comentario4, comentario2]);
var foto3 = new foto_1.Foto("eeee.com", "mi foto 3", "#foto #primera", usuario2, [], [comentario3, comentario2]);
var foto4 = new foto_1.Foto("gggg.com", "mi foto 4", "#foto #primera", usuario3, [], [comentario4, comentario2]);
console.log("usuario:    ", JSON.stringify(usuario1));
console.log("usuario:    ", JSON.stringify(usuario2));
console.log("usuario:    ", JSON.stringify(usuario3));
console.log("usuario:    ", JSON.stringify(usuario4));
// console.log("comentario:    ", JSON.stringify(comentario1))
// console.log("comentario:    ", JSON.stringify(comentario2))
// console.log("comentario:    ", JSON.stringify(comentario3))
// console.log("comentario:    ", JSON.stringify(comentario4))
// console.log("foto:    ", JSON.stringify(foto1))
// console.log("foto:    ", JSON.stringify(foto2))
// console.log("foto:    ", JSON.stringify(foto3))
// console.log("foto:    ", JSON.stringify(foto4))
