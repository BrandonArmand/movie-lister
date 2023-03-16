<script lang="ts">
    export let img: string;
    export let title: string;
    export let date: string;
</script>

<div class="tile">
    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${img}`} alt={title}/>
    <div class="details">
        <h4>{title}</h4>
        <p>{date}</p>
    </div>
</div>

<style>
    .tile {
        width: 10rem;
        height: auto;
        margin: 5px;
        padding: 5px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .tile img {
        width: 100%;
        height: auto;
    }

    .details {
        height: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .details h4, p {
        margin-top: 0;
        margin-bottom: 0;
    }
</style>
