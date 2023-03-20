<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    export let id: any;
    export let img: string;
    export let title: string;
    export let date: string;
    export let genres: string[];
    // export let isInSessionStorage = false;
    import {
        addToWatchlist,
        isInWatchlist,
        removeFromWatchlist,
    } from "../helpers/watchlist";

    $: movieData = { id, img, title, date, genres };
    let isInSessionStorage = false;
    $: url = isInSessionStorage
        ? "/verify-verified-check-icon.svg"
        : "/plus-round-line-icon.svg";

    function onClick() {
        if (isInSessionStorage) {
            removeFromWatchlist(sessionStorage, id);
        } else {
            addToWatchlist(sessionStorage, movieData);
        }
        isInSessionStorage = !isInSessionStorage;
    }

    afterNavigate(() => {
        isInSessionStorage = isInWatchlist(sessionStorage, id);
    });
</script>

<button class="watchlist" on:click={onClick}>
    <img src={url} width="18px" height="18px" alt="" />
    {#if !isInSessionStorage}
        <p>Watchlist</p>
    {/if}
</button>

<style>
    p {
        margin-left: 5px;
    }
    .watchlist {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;
        z-index: 2000;
        width: fit-content;
        height: 25px;
        position: absolute;
        top: 15px;
        right: 15px;
        /* border: 1px solid black; */
        border-radius: 8px;
        box-shadow: inset 10px -9px 17px -16px rgba(0, 0, 0, 0.68);
    }

    .watchlist:hover {
        box-shadow: inset 10px -9px 17px -18px rgba(0, 0, 0, 0.68);
    }
</style>
