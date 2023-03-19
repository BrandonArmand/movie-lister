<script lang="ts">
    export let data;
    import Logo from "../components/Logo.svelte";
    import SearchBar from "../components/SearchBar.svelte";
</script>

<nav>
    <div class="left-group">
        <Logo />
        <a href="/watchlist">My Watchlist</a>
    </div>

    <SearchBar {...data} />
</nav>

<slot />

<style>
    .left-group {
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
    }
    .left-group a {
        margin-left: 3rem;
        color: #333;
    }
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
</style>
