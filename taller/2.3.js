const edad = () => 18;

// Taller 2.3: Conversiones
const maltrecho = {
    esValido: false,
    calcular: edad(),
    fecha: (new Date()).toJSON(),
    toJSON: function () {
        return {
            consulta: `Es${this.esValido ? '' : ' no'} válido y tiene ${this.calcular} años`
        }
    }
}
console.log(maltrecho);

//TODO: Convertir a Texto
//const texto = JSON.stringify(maltrecho, ['calcular', 'fecha'], 8);
const texto = JSON.stringify(maltrecho);
console.log(texto);