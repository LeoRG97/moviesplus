import { Movie } from './../interfaces/movieInterface';

export type RootStackParamList = {
  // mapear los argumentos que debe recibir cada ruta
  HomeScreen: undefined;
  DetailScreen: Movie;
};
