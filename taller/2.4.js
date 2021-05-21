// Taller 2.4: Conversiones
//const texto = '{"esValido": false, "calcular": edad(), "fecha": (new Date()).toJSON()}';  //No se puede porque JSON no puede almacenar lógica, sólo información.
const texto = '{"esValido": false, "calcular": 18, "fecha": "2020-04-01T03:15:32.130Z"}';

//TODO: Convertir a Objeto
const conversion = (clave, valor) => {
    if(typeof valor !== "string"){
        return valor;
    };
    //forma 1 de validar la fecha
    /* const isoDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    if(isoDate.test(valor)) {
        return new Date(valor);
        //return Date.parse(valor);  //el formato ISO-8601 retorna los segundos que han transcurrido desde 1970
    }; */

    //forma 2 de validar la fecha
    if(clave === "fecha") {
        return Date.parse(valor);
    }
    return valor;
};

const maltrecho = JSON.parse(texto, conversion);
console.log(maltrecho); 