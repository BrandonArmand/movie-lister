<script lang="ts">
    import { onMount } from "svelte";
    import MovieTile from "../../components/MovieTile.svelte";
    import { getWatchlist } from "../../helpers/watchlist";

    let movies: any = [];
    onMount(() => {
        movies = getWatchlist(sessionStorage);
    });
</script>

<div class="container">
    {#each movies as movie}
        <MovieTile
            id={movie.id}
            img={movie.img}
            title={movie.title}
            date={movie.date}
            genres={movie.genres}
        />
    {/each}
</div>

<style>
    .container {
        padding-top: 3rem;
        overflow-x: hidden;
        overflow-y: scroll;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        height: calc(100vh - 105px);
    }
</style>
