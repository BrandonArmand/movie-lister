import { genMovies } from '../../helpers/movies';

export async function load({ url }) {
    const query = url.searchParams.get('s') ?? '';
    const genre = url.searchParams.get('g') ?? '';

    return {
        movies: genMovies(query, null, genre),
        params: { query, genre }
    };
}