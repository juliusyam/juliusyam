import axios from 'axios';

export const apiService = axios.create({
  baseURL: 'http://localhost:1337',
  timeout: 3000,
  headers: {
    'Authorization': 'Bearer dd25bb97169e07f7187ca4ff51166f91b89840bb2347525a8ad76d991ebb70d2065606a494f028bfbd352f537398f54ffe42050ec5281f7bf8e38bef0e69d922bdc0312373ea4a485390a92e6d456e1ff001f0db3550a6b3aff01e13e80c04cf9f531c4b5f9e32def668d6f2ba8f2eaea88351180bf6eaf5b5dc52fc97b8e53b',
  }
});