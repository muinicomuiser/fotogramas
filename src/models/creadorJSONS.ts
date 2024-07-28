import { Usuario } from "./usuario";
import { Comentario } from "./comentario";
import { Foto } from "./foto";

let usuario1: Usuario = new Usuario("juan", "correo.com", "hola23", "sdkjs3d.com")
let usuario2: Usuario = new Usuario("pedro", "maildos.com", "hola324", "sdkasdhd.com")
let usuario3: Usuario = new Usuario("juana", "mail3.com", "hol23a23", "sdds.com")
let usuario4: Usuario = new Usuario("pedra", "mail.com", "ho23lda23", "kjkj.com")

let comentario1: Comentario = new Comentario("muy weno", usuario1)
let comentario2: Comentario = new Comentario("bien weno", usuario2)
let comentario3: Comentario = new Comentario("bastante weno", usuario3)
let comentario4: Comentario = new Comentario("terrible weno", usuario4)

let foto1: Foto = new Foto("kkkkk.com", "mi foto 1", "#foto #primera", usuario1, [], [comentario1, comentario2])
let foto2: Foto = new Foto("dddd.com", "mi foto 2", "#foto #primera", usuario1, [], [comentario4, comentario2])
let foto3: Foto = new Foto("eeee.com", "mi foto 3", "#foto #primera", usuario2, [], [comentario3, comentario2])
let foto4: Foto = new Foto("gggg.com", "mi foto 4", "#foto #primera", usuario3, [], [comentario4, comentario2])

console.log("usuario:    ", JSON.stringify(usuario1))
console.log("usuario:    ", JSON.stringify(usuario2))
console.log("usuario:    ", JSON.stringify(usuario3))
console.log("usuario:    ", JSON.stringify(usuario4))

// console.log("comentario:    ", JSON.stringify(comentario1))
// console.log("comentario:    ", JSON.stringify(comentario2))
// console.log("comentario:    ", JSON.stringify(comentario3))
// console.log("comentario:    ", JSON.stringify(comentario4))

// console.log("foto:    ", JSON.stringify(foto1))
// console.log("foto:    ", JSON.stringify(foto2))
// console.log("foto:    ", JSON.stringify(foto3))
// console.log("foto:    ", JSON.stringify(foto4))
