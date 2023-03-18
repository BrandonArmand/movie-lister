import { genMovies } from '../../helpers/movies';

export async function load({ url }) {
    const query = url.searchParams.get('s');

    return {
        movies: genMovies(query),
        query
    };
}