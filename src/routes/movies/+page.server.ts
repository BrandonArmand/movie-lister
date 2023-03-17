import { getMovies } from '../../helpers/movies';

export async function load({ url }) {
    const query = url.searchParams.get('s');

    return {
        movies: getMovies(query),
        query
    };
}