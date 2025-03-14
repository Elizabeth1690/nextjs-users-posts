export const fetchComments = async (id: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    if (!response.ok) throw new Error("Error al obtener comentarios");
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
