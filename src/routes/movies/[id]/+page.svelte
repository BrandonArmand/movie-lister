<script lang="ts">
    import Recommendations from "../../../components/Recommendations.svelte";

    export let data: any;
    const { details, cast, recommendations } = data;
    let director = "";
    cast.crew.forEach((credit: any) => {
        if (credit.department === "Directing") {
            director = credit.name;
        }
    });

    let notableCast: Record<string, string>[] = [];
    cast.cast.slice(0, 4).forEach((actor: any) => {
        notableCast.push({ name: actor.name, character: actor.character });
    });

    let rating: string[] = [];
    for (let i = 0; i < details.vote_average / 2; i++) {
        rating.push("/star.svg");
    }
</script>

<div class="container">
    <div class="image">
        <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`}
            alt={"No image found."}
        />
    </div>
    <div class="details">
        <div class="rating">
            <p>{rating.length} / 5</p>
            {#each rating as star}
                <img src={star} alt="" width="20px" />
            {/each}
        </div>
        <div class="title">
            <h1>{details.title}<span>({details.original_language})</span></h1>
        </div>
        <h4>Directed By: {director}</h4>
        <p>{details.overview}</p>
        <h3 style="text-align: center; width: 100%">Cast</h3>
        <div class="cast">
            {#each notableCast as actor}
                <div class="actor-group">
                    <p>{actor.name}</p>
                    <p>as</p>
                    <p>{actor.character}</p>
                </div>
            {/each}
        </div>
        <hr />
        <div class="genres">
            {#each details.genres as genre}
                <h3>{genre.name}</h3>
            {/each}
        </div>
        <p style="text-align: end; width: 100%">
            Release: {new Date(details.release_date).toLocaleDateString()}
        </p>
    </div>
    <div class="recommendations">
        <h3>Similar Movies</h3>
        <Recommendations movies={recommendations.results.splice(0, 6)} />
    </div>
</div>

<style>
    .recommendations {
        width: 75%;
    }
    .recommendations h3 {
        margin-top: 0rem;
        text-align: end;
    }
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        height: calc(100vh - 105px);
        width: 100%;
    }
    .title {
        display: flex;
    }
    .title span {
        font-size: 16px;
        font-weight: 600;
    }
    .image {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-right: 3rem;
        width: 30%;
    }
    .image img {
        max-width: 100%;
    }
    .details {
        width: 30%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .details h1,
    h3,
    h4 {
        margin-bottom: 0;
    }
    .details h1 {
        margin-top: 0;
    }
    .details h4 {
        width: 100%;
        margin-top: 0;
        text-align: end;
    }
    .genres {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
    .genres h3 {
        margin-right: 1rem;
    }
    .rating {
        display: flex;
    }
    .rating p {
        margin: 0;
        margin-right: 0.5rem;
    }
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
    }
</style>
