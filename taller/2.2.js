//Taller 2.2: Conversiones
const texto = '{"raza":"Británico","nombre":"Felix"}';
//TODO: Convertir a Objeto

console.log("Texto:");
console.log(texto);

const gato = JSON.parse(texto);  //actividad

console.log("Objeto:");
console.log(gato);

gato.nombre = "Garfield";       //mutable
console.log(gato);