const API_URL = 'http://localhost:5000/api';

export async function getCategorias() {
  try {
    const response = await fetch(`${API_URL}/categorias`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export async function addCategorias(categoria) {
  try {
    const response = await fetch(`${API_URL}/categorias`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(categoria)
    })
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategory(id) {
  try {
    const response = await fetch(`${API_URL}/categorias/${id}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateCategory(id,categoria) {
  try {
    const response = await fetch(`${API_URL}/categorias/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(categoria)
    })
    return response.status;
  } catch (error) {
    console.log(error);
  }
}
