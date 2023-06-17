import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getUsuarios() {
  try {
    const response = await axios({
      url: `${baseUrl}/usuarios`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getCursos() {
  try {
    const response = await axios({
      url: `${baseUrl}/cursos`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getIdiomas() {
  try {
    const response = await axios({
      url: `${baseUrl}/idiomas`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function saveIdioma(idiomaData) {
  const formData = new FormData();
  formData.append("nombre", idiomaData.nombre);
  formData.append("descripcion", idiomaData.descripcion);
  formData.append("paises", idiomaData.paises);
  formData.append("boton", idiomaData.boton);
  formData.append("imagen", idiomaData.imagen);
  try {
    console.log(idiomaData);
    const response = await axios({
      url: `${baseUrl}/idiomas`,
      method: "POST",
      data: formData,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function saveCursos(cursosData) {
  try {
    console.log(cursosData);
    const response = await axios({
      url: `${baseUrl}/cursos`,
      method: "POST",
      data: cursosData
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function saveUsuario(usuarioData) {
  const formData = new FormData();
  formData.append("usuario", usuarioData.usuario);
  formData.append("nombre", usuarioData.nombre);
  formData.append("apellido", usuarioData.apellido);
  formData.append("fechadenac", usuarioData.fechadenac);
  formData.append("dni", usuarioData.dni);
  formData.append("telefono", usuarioData.telefono);
  formData.append("email", usuarioData.email);
  formData.append("password", usuarioData.password);
  formData.append("imagen", usuarioData.imagen);
  formData.append("categoria", usuarioData.categoria);

  try {
    console.log(usuarioData);
    const response = await axios({
      url: `${baseUrl}/usuarios`,
      method: "POST",
      data: formData,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}