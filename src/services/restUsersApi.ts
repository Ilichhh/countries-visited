export const getAllUsers = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/users`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
