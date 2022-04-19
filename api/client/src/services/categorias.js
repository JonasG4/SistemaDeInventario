const API_URL = "http://localhost:5000/api"

export async function getCategorias() {
  try {
    const response = await fetch(`${API_URL}/categorias`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}
