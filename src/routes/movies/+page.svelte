<script lang="ts">
    export let data;
    import MovieTile from "../../components/MovieTile.svelte";
    import { genMovies } from "../../helpers/movies";

    let isLoading = false;

    async function loadMovies(e: any) {
        const offset =
            e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop;
        if (offset <= 100 && !isLoading) {
            isLoading = true;
            const nextPage = Math.floor(data.movies.length / 20 + 1);
            await genMovies(data.query, nextPage).then((nextMovies) => {
                data.movies = [...data.movies, ...nextMovies];
                isLoading = false;
            });
        }
    }
</script>

<div class="container" on:scroll={loadMovies}>
    {#each data.movies as movie}
        <MovieTile
            img={movie.poster_path}
            title={movie.title}
            date={movie.release_date}
            genres={movie.genres}
        />
    {/each}
</div>

<style>
    .container {
        overflow-x: hidden;
        overflow-y: scroll;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        height: calc(100vh - 105px);
    }
</style>
