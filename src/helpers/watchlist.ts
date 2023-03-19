const WATCHLIST_KEY = "watchlist";
const WATCHLIST_LOOKUP_KEY = "watchlist_lookup";

export function addToWatchlist(sessionStorage: any, data: any) {
    if (!sessionStorage.getItem(WATCHLIST_KEY)) {
        sessionStorage.setItem(WATCHLIST_KEY, JSON.stringify([]));
        sessionStorage.setItem(WATCHLIST_LOOKUP_KEY, JSON.stringify({}));
    }

    const watchlistLookup: Record<string, 1> = JSON.parse(sessionStorage.getItem(WATCHLIST_LOOKUP_KEY) ?? "{}");
    watchlistLookup[data.id] = 1;
    sessionStorage.setItem(
        WATCHLIST_LOOKUP_KEY,
        JSON.stringify(watchlistLookup)
    )

    const watchlist: any[] = JSON.parse(sessionStorage.getItem(WATCHLIST_KEY) ?? "[]");
    sessionStorage.setItem(
        WATCHLIST_KEY,
        JSON.stringify([...watchlist, data])
    );
}

// This just removes from lookup for efficiency.
export function removeFromWatchlist(sessionStorage: any, id: any) {
    if (!sessionStorage.getItem(WATCHLIST_KEY)) {
        sessionStorage.setItem(WATCHLIST_LOOKUP_KEY, JSON.stringify({}));
    }

    const watchlistLookup: Record<string, 1> = JSON.parse(sessionStorage.getItem(WATCHLIST_LOOKUP_KEY) ?? "{}");
    delete watchlistLookup[id];
    console.log(watchlistLookup)
    sessionStorage.setItem(
        WATCHLIST_LOOKUP_KEY,
        JSON.stringify(watchlistLookup)
    )
}

// return movies that are in the lookup only with dedup.
export function getWatchlist(sessionStorage: any): any[] {
    const watchlist = JSON.parse(sessionStorage.getItem(WATCHLIST_KEY) ?? "[]");
    let dedup = new Set();
    let output: any[] = [];

    watchlist.forEach((movie: any) => {
        if (isInWatchlist(sessionStorage, movie.id) && !dedup.has(movie.id)) {
            output.push(movie);
        }
        dedup.add(movie.id);
    });

    return output;
}

export function isInWatchlist(sessionStorage: any, id: string): boolean {
    const watchlistIds = JSON.parse(sessionStorage.getItem(WATCHLIST_LOOKUP_KEY) ?? "{}");
    return watchlistIds[id] === 1;
}