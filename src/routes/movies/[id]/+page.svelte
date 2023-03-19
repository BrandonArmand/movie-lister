<script lang="ts">
    import CastSection from "../../../components/CastSection.svelte";
    import Recommendations from "../../../components/Recommendations.svelte";
    import StarRating from "../../../components/StarRating.svelte";
    import WatchlistIcon from "../../../components/WatchlistIcon.svelte";
    export let data: any;

    $: ({ details, cast, recommendations } = data);
    let director = "";

    $: cast.crew.forEach((credit: any) => {
        if (credit.department === "Directing") {
            director = credit.name;
        }
    });
</script>

<div class="container">
    <div class="image">
        <WatchlistIcon {...data.details} img={data.poster_path} />
        <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`}
            alt={"No image found."}
        />
    </div>
    <div class="details">
        <StarRating vote_average={details.vote_average / 2} />
        <div class="title">
            <h1>{details.title}<span>({details.original_language})</span></h1>
        </div>
        <h4>Directed By: {director}</h4>
        <p>{details.overview}</p>
        <h3 style="text-align: center; width: 100%">Cast</h3>
        <CastSection cast={cast.cast} />
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
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-right: 3rem;
        width: 30%;
    }
    .image img {
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
</style>
