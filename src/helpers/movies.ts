import { PUBLIC_API_KEY } from '$env/static/public';
import { getGenres, mapGenres } from './genres';

export interface Movie {
  "adult": boolean,
  "backdrop_path": string,
  "genre_ids": number[],
  "genres": string[],
  "id": number,
  "original_language": string,
  "original_title": string,
  "overview": string,
  "popularity": number,
  "poster_path": string,
  "release_date": string,
  "title": string,
  "video": boolean,
  "vote_average": number,
  "vote_count": number
}

export async function getMovies(query: string | null = null, page: number | null = null): Promise<Movie[]> {
  const PAGE_COUNT_DEFAULT = 3;
  const movies: Movie[] = [];
  const apiUrls: string[] = [];

  if (page) {
    apiUrls.push(
      query ? searchMoviesApi(query, page) : getMoviesApi(page)
    );
  }
  else {
    for (let i = 1; i < PAGE_COUNT_DEFAULT; i++) {
      apiUrls.push(
        query ? searchMoviesApi(query, i) : getMoviesApi(i)
      );
    }
  }

  const apiResponses = await Promise.all(apiUrls.map((url) => fetch(url)));
  const apiData = await Promise.all(apiResponses.map((response) => response.json()));
  const genreMap = await getGenres();

  apiData.forEach((data) => {
    movies.push(...data.results);
  });

  // assigns genre strings to Movie object from genre_ids
  movies.forEach((movie) => {
    movie.genres = mapGenres(movie.genre_ids, genreMap);
  })

  return movies;
}

function getMoviesApi(page: number = 1): string {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${PUBLIC_API_KEY}&primary_release_date.gte=1995-01-01&include_adult=false&page=${page}`;
}

function searchMoviesApi(query: string, page: number = 1): string {
  return `https://api.themoviedb.org/3/search/movie?api_key=${PUBLIC_API_KEY}&query=${query}&page=${page}`;
}