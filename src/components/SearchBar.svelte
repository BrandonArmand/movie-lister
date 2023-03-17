<script lang="ts">
    import { goto } from "$app/navigation";
    let query: string = "";

    async function submitSearch() {
        // setTimeout is required to work on all browsers.
        // Firefox only fires once, ios doesn't work at all
        // solution: https://www.reddit.com/r/sveltejs/comments/10o7tpu/comment/j6hrd2h/
        // Suspect is has to do with binding goto on a submit event.
        setTimeout(() => goto(`/movies?s=${encodeURIComponent(query)}`), 0);
    }
</script>

<form on:submit={submitSearch}>
    <input id="search" placeholder="search..." bind:value={query} />
</form>

<style>
    input {
        height: 24px;
        width: 300px;
    }
</style>
