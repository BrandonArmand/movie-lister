<script>
    export let data;
    import MovieTile  from './MovieTile.svelte';
</script>

<div class="container">
{#each data.movies as movie}
    <MovieTile img={movie.poster_path} title={movie.title} date={movie.release_date}/>
{/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>