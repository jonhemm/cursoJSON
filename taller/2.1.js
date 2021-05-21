// Taller 2.1: Conversiones
const perro = {
    raza: "Akita Japones",
    nombre: "Hachiko",
    toJSON: function() {
        return {
            formateado: `${this.nombre} (${this.raza})`         //Formato de impresión personalizado. Se llama cuando se convierte a JSON (texto)
        };
    }
};
//TODO: Convertir a Texto

const texto = JSON.stringify(perro); //actividad

console.log("Objeto:");
console.log(perro);

console.log("Texto:");
console.log(texto);