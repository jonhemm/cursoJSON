const usuarios = {};

let usuario = 'equiman'
usuarios[usuario] = {};
usuarios[usuario].tipo = 'Administrador';
usuarios[usuario].alerta = {};
usuarios[usuario].alerta.tiempo = 30;
usuarios[usuario].alerta.tipo = 'seg';

usuario = 'equimancho';
const alerta = {tiempo: 60, tipo: 'seg'};
usuarios[usuario] = {tipo: 'Usuario', alerta: alerta};

console.log(JSON.stringify(usuarios, null, 4));