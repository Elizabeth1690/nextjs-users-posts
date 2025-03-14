export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Error al obtener publicaciones");
    return response.json();
  } catch (error) {
    console.error("Error en fetchPosts:", error);
    throw error;
  }
};

export const fetchPostById = async (id: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok)
      throw new Error(`Error al obtener la publicación con ID ${id}`);
    return response.json();
  } catch (error) {
    console.error("Error en fetchPostById:", error);
    throw error;
  }
};
