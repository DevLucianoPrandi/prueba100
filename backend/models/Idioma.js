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

idiomaSchema.methods.setImgUrl = function setImgUrl (){

    const {host, port} = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('idioma', idiomaSchema)