const mongoose= require('mongoose')
const { appConfig } =require ('../config')

const Schema = mongoose.Schema

const idiomaSchema = Schema ({
nombre: String,
descripcion: String,
boton: String,
paises: String,
imagen: String,
},{

    timestamps: true
});

idiomaSchema.methods.setImagen = function setImagen (){

    const {host, port} = appConfig
    this.imagen = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('idioma', idiomaSchema)