import axios from 'axios';

export const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e9502ec360d8d6c4f5c44c54ccd05be9',
    language: 'es-ES',
  },
});
