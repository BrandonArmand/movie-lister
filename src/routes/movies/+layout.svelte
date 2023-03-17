<script lang="ts">
    import Logo from "../../components/Logo.svelte";
    import SearchBar from "../../components/SearchBar.svelte";
</script>

<nav>
    <Logo />
    <SearchBar />
</nav>

<slot />

<style>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
</style>
