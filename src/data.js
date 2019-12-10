import axios from 'axios';
import fs from 'fs';

export const getMoviesData = async () => {
  const { data } = await axios.get('/movies?_expand=genre')
  return data
}

export const getGenres = async () => {
  const { data } = await axios.get('/genres');
  return data
}

export const getMovie = async (id) => {
  const { data } = await axios.get(`/movies/${id}?_expand=genre`);
  return data;
}

export const updateMovie = async (payload) => {
  const { data } = await axios.put(`/movies/${payload.id}`, payload
  );
  return data
}

export const addMovie = async (payload) => {
  const { data } = await axios.post('/movies', payload);
  return data;
}

export const readFile = async () => {
  const data = await fs.readFile('./views/Home.vue');
  return data;
}
