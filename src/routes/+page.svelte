<script>
    import Logo from "../components/Logo.svelte";
    import SearchBar from "../components/SearchBar.svelte";
</script>

<div class="container">
    <Logo />
    <a href="/movies"><h1>Get Started!</h1></a>
</div>

<style>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
