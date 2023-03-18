import { genMovie, genMovieCast, genSimilarMovies } from '../../../helpers/movies';

export async function load({ params }) {
    return {
        details: genMovie(params.id),
        cast: genMovieCast(params.id),
        recommendations: genSimilarMovies(params.id)
    };
}