<script lang="ts">
    export let vote_average: number;
    let rating: string[] = [];
    $: if (vote_average) {
        rating = [];
    }

    $: for (let i = 0; i < Math.floor(vote_average); i++) {
        rating = [...rating, "/star.svg"];
    }
</script>

<div class="rating">
    <p>{rating.length} / 5</p>
    {#each rating as star}
        <img src={star} alt="" width="20px" />
    {/each}
</div>

<style>
    .rating {
        display: flex;
    }
    .rating p {
        margin: 0;
        margin-right: 0.5rem;
    }
</style>
