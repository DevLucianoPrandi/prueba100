const mongoose= require('mongoose')
const { appConfig } =require ('../config')

const Schema = mongoose.Schema

const alumnoSchema = Schema ({
nombre: String,
apellido: String,
dni: String,
fechadenac: String,
imgUrl: String,
email: String,
telefono: String,
password: String,
usuario: String
},{

    timestamps: true
});

alumnoSchema.methods.setImgUrl = function setImgUrl (){

    const {host, port} = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('alumno', alumnoSchema)