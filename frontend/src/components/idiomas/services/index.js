import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

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
