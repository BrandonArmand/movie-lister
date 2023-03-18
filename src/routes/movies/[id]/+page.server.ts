import { genMovie, genMovieCast } from '../../../helpers/movies';

export async function load({ params }) {
    return {
        details: genMovie(params.id),
        cast: genMovieCast(params.id)
    };
}