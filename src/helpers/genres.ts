import { PUBLIC_API_KEY } from '$env/static/public';

export type Genres = Map<number, string>;

export async function genGenres(): Promise<Genres> {
    const apiResponse = await fetch(getGenresApi());
    const apiData = await apiResponse.json();
    const genres = new Map();
    if (apiData) {
        apiData.genres.forEach((genre: any) => {
            genres.set(genre.id, genre.name);
        })
    }

    return genres;
}

export function mapGenres(genreIds: number[], genreMap: Map<number, string>): string[] {
    const genres: string[] = [];
    genreIds.forEach((id) => {
        const genre = genreMap.get(id);
        if (genre) {
            genres.push(genre);
        }
    })
    return genres;
}

function getGenresApi(): string {
    return `https://api.themoviedb.org/3/genre/movie/list?api_key=${PUBLIC_API_KEY}&include_adult=false`;
}