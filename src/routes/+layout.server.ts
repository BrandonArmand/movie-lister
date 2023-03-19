import { genGenres } from '../helpers/genres';

export async function load() {
    return {
        genres: genGenres()
    };
}