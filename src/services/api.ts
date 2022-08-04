import axios from 'axios';

export const key = 'ec0793b3ae5eea0ab99e6419feb0e5e4';

const apiSearch = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&page=1&include_adult=false&query=`,
});

const apiPage = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&page=1&include_adult=false`,
});

// &page=1&query=

const apiMovieDetail = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`,
});

export { apiSearch, apiMovieDetail, apiPage };
