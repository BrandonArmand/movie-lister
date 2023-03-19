<script lang="ts">
    import MovieTile from "./MovieTile.svelte";

    // This takes in a list of movies; however,
    // it would be better to take in an id and always
    // generate a list, but for the sake of keeping
    // as much server rendered as possible, it will
    // stay this way.
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
