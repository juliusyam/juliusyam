import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const jwt = process.env.NEXT_PUBLIC_API_KEY;

if (!baseURL || !jwt) {
  throw Error('Base URL and JWT from Strapi must be provided');
}

export const apiService = axios.create({
  baseURL,
  timeout: 3000,
  headers: {
    'Authorization': `Bearer ${ jwt }`,
  },
});