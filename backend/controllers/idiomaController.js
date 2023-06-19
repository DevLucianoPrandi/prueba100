const Idioma = require("../models/Idioma");

async function addIdioma(req, res) {
  try {
    const {nombre, descripcion, boton, paises, imagen} = req.body;

const idioma = Idioma({nombre, descripcion, boton, paises, imagen,});

    if (req.file) {
      const { filename } = req.file;
      idioma.setImagen(filename);
    }

    const idiomas = await idioma.save();
    res.status(201).send({ idiomas });
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

async function getIdiomas(req, res) {
   try {
    const idiomas = await Idioma.find();
    res.status(200).send ({idiomas})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function findIdiomas(req, res) {
  try {
    const idiomas = await Idioma.findById(req.params.id);
    res.status(201).send({ idiomas });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

async function updateIdiomas(req, res) {
  try {
    const idiomas = await Idioma.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(201).send({ idiomas });
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

async function deleteIdiomas(req, res) {
  try {
    const idiomas = await Idioma.findByIdAndDelete(req.params.id);
    res.status(200).send({ idiomas });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}


module.exports = {
  addIdioma,
  getIdiomas,
  findIdiomas,
  updateIdiomas,
  deleteIdiomas
};
