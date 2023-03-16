import { API_KEY } from '$env/static/private';

export async function load() {
	const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=1995-01-01&include_adult=false`);
    const movies = await response.json();
    return {
        movies: movies.results
    }
}