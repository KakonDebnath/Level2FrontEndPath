// export const getServicesData = async () => {
//   const res = await fetch('https://jsonpdsdfslaceholder.typicode.com/users');
//   return await res.json();

import axios from 'axios';

// };
export const getServicesData = async () => {
  return await axios.get('https://jsonpdsdfslaceholder.typicode.com/users');
};
