export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export const fetchUserById = async (id: number) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error en fetchUserById:", error);
    return null;
  }
};
