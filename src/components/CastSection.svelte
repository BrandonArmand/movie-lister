<script lang="ts">
    export let cast: Record<string, string>[];
    let notableCast: Record<string, string>[] = [];
    $: if (cast) {
        notableCast = [];
    }

    $: cast.slice(0, 4).forEach((actor: any) => {
        notableCast = [
            ...notableCast,
            { name: actor.name, character: actor.character },
        ];
    });
</script>

<div class="cast">
    {#each notableCast as actor}
        <div class="actor-group">
            <p>{actor.name}</p>
            <p class="as">as</p>
            <p>{actor.character}</p>
        </div>
    {/each}
</div>

<style>
    .cast {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        text-align: center;
    }
    .cast p {
        margin: 0;
    }
    .actor-group {
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
    .as {
        line-height: 6px;
        color: #333;
    }
</style>
