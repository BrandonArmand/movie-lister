<script lang="ts">
    import WatchlistIcon from "./WatchlistIcon.svelte";

    export let id: any;
    export let img: string;
    export let title: string;
    export let date: string;
    export let genres: string[];
</script>

<div class="container">
    <WatchlistIcon {...{ id, img, title, date, genres }} />
    <a href={`/movies/${id}`}>
        <div class="tile">
            <div class="image">
                <img
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${img}`}
                    alt={title}
                />
            </div>
            <div class="details">
                <h4 {title}>{title}</h4>
                <div class="genres" title={genres.join(" | ")}>
                    {#each genres.slice(0, 2) as genre}
                        <p>{genre}</p>
                    {/each}
                </div>
                <p>{date}</p>
            </div>
        </div>
    </a>
</div>

<style>
    .tile {
        position: relative;
        width: 10rem;
        height: 20rem;
        margin: 5px;
        padding: 5px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .tile .image {
        width: 160px;
        min-height: 240px;
        background-color: #3333334f;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .tile img {
        width: 100%;
        min-height: 100%;
    }

    .details {
        height: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .details h4 {
        overflow: hidden;
        height: 50%;
        color: black;
    }

    .details h4,
    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    .genres {
        display: flex;
        justify-content: space-around;
    }

    p {
        align-self: flex-end;
        font-size: 0.7rem;
        color: #333;
    }

    .genres p {
        font-size: 0.8rem;
        font-weight: 600;
    }

    a {
        text-decoration: none;
    }

    .container {
        position: relative;
        transition: all 0.1s ease;
    }

    .container:hover {
        transform: translateY(-5%);
    }
</style>
