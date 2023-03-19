<script lang="ts">
    export let genres: Map<number, string>;
    import { goto } from "$app/navigation";
    let query: string = "";
    let selectedGenre: string = "";
    $: isGenreDisabled = query.length > 0;

    async function submitSearch() {
        // setTimeout is required to work on all browsers.
        // Firefox only fires once, ios doesn't work at all
        // solution: https://www.reddit.com/r/sveltejs/comments/10o7tpu/comment/j6hrd2h/
        // Suspect is has to do with binding goto on a submit event.
        setTimeout(
            () =>
                goto(
                    `/movies?s=${encodeURIComponent(query)}&g=${selectedGenre}`
                ),
            0
        );
    }
</script>

<form on:submit={submitSearch}>
    <label for="search">Search by Movie:</label>
    <input id="search" placeholder="search..." bind:value={query} />

    <label for="genre"> /or Genre:</label>
    <select
        id="genre"
        bind:value={selectedGenre}
        on:change={submitSearch}
        disabled={isGenreDisabled}
    >
        <option selected value="">-- All Genres --</option>
        {#each Array.from(genres) as genre}
            <option selected value={genre[0]}>{genre[1]}</option>
        {/each}
    </select>
</form>

<style>
    input {
        height: 24px;
        width: 300px;
    }
    select {
        height: 30px;
    }
</style>
