const Idioma = require("../models/Idioma");

async function addIdioma(req, res) {
  try {
    const {
      nombre,
      descripcion,
      boton,
      paises ,
      imagen,
    } = req.body;

const idioma = Idioma({
        nombre,
        descripcion,
        boton,
        paises ,
        imagen,
    });

    if (req.file) {
      const { filename } = req.file;
      idioma.setImagen(filename);
    }

    const idiomas = await idioma.save();

    res.status(201).send({ idiomas });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

async function getIdiomas (req, res) {
const idiomas = await Idioma.find().lean().exec()
res.status(200).send({idiomas})
}

module.exports = {
  addIdioma, getIdiomas
};
