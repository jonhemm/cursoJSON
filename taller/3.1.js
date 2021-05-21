//Taller 3: Propiedades
const persona = {
    nombre: "Homer J Simpson",
    edad: 39,
    residencia: {
        direccion: "Avenida Siempreviva 742",
        ciudad: "Springfield"
    },
    esEmpleado: true,
    hijos: ["Bart", "Lisa", "Maggie"]
}

//TODO: Mostrar cada propiedad
console.log(JSON.stringify(persona));
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Residencia: ${persona.residencia.direccion}, ${persona.residencia.ciudad}`);
console.log(`Es empleado: ${persona.esEmpleado ? 'Si' : 'No'}`);
console.log(`Hijos: ${persona.hijos.join(', ')}`);   //join junta todos los elementos del arreglo y establece un separador

if(persona.hijos !== undefined && persona.hijos.length > 0)
    console.log(`Hijos: ${persona.hijos.join(', ')}`);   //join junta todos los elementos del arreglo y establece un separador

if(persona.hijos !== undefined && persona.hijos.length > 0) {
    for(let i = 0; i < persona.hijos.length; i++) {
        console.log(`Hijo ${i+1}: ${persona.hijos[i]}`);
    }
} else {
    console.log('No tiene hijos');
}
