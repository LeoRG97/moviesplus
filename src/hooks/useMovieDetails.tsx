import { useState, useEffect } from 'react';
import { movieDB } from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  cast: Cast[]
  movieFull?: MovieFull,
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
      const movieCastPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

      const [movieDetailsResponse, movieCastResponse] = await Promise.all([
        movieDetailsPromise,
        movieCastPromise,
      ]);

      setState({
        isLoading: false,
        movieFull: movieDetailsResponse.data,
        cast: movieCastResponse.data.cast,
      });
    };
    getMovieDetails();
  }, [movieId]);


  return {
    ...state,
  };
};
