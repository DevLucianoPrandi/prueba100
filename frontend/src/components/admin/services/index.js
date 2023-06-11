import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getAlumnos() {
  try {
    const response = await axios({
      url: `${baseUrl}/alumnos`,
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

  export async function getInscripciones() {
    try {
      const response = await axios({
        url: `${baseUrl}/inscripciones`,
        method: "GET",
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }