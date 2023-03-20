# Movie Lister

## link
https://illustrious-elf-b43760.netlify.app/

## Preview

https://user-images.githubusercontent.com/27185256/226262166-9a52b280-0998-4f8e-a0a8-d91166f270eb.mp4

## Tech
1. SvelteKit w/ Vite
2. Vanilla CSS

## Functionality
1. View all movies with Infinite scrolling.
2. Search movies with movie name or genre with infinite scrolling.
3. Get movie details, like description, director, cast, rating, and genres.
4. Movie recommendations for each movie.
5. Add or remove movies to the Watchlist as an efficient local cache to remove un-needed API calls.

## Notes:
- App was built with effeciency in mind, not design.
- No UI library was used, all vanilla CSS.
- Due to the infinite scrolling, API Key is visible on the client through network requests.
- - This would not be the usual case.
- The watchlist uses session storage, and it is split into two different keys.
- 1. watchlist
- - - This contains an ordered list of cached movie details, so that the server does not need to be hit when on /watchlist.
- 2. watchlist_lookup
- - - This is the O(1) lookup of movies so that each watchlist icon can instantly determine if the current movie_id is cached in the watchlist
- - When a movie is added to the watch list, it goes into both lists
- - When a movie is removed, it only gets removed from the watchlist_lookup to ensure it is a quick process
- - When the movies are retrieved, they are retrieved from the watchlist list in an ordered, and deduped way by utilizing the watchlist_lookup. The results are then uesed to replace the watchlist session incase there were any duplicates or extra cached data.
- The similar movies feature uses an API; however, in a real use-case. This would run off of a data pipeline and embedding model to join embeddings together based on many movie factors to determine the nearest nodes of movies. A traditional KNN process would be fine here, but could be expanded to determine users' watchlist to map which movies share a userbase.
