<script lang="ts">
    import MovieTile from "./MovieTile.svelte";

    export let movies: Record<any, any>[];
</script>

<div class="recommendations">
    {#each movies as movie}
        <MovieTile
            title={movie.title}
            img={movie.poster_path}
            id={movie.id}
            date={movie.release_date}
            genres={movie.genres}
        />
    {/each}
</div>

<style>
    .recommendations {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
        height: auto;
        border-top: solid 2px black;
        border-radius: 10px 10px 0 0;
    }
</style>
