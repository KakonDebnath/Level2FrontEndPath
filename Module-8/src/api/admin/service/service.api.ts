export const getServicesData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return await res.json();
};