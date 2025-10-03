import { useFetch } from "./useFetch";
import type { MovieDetail, ShowDetail, CreditsResponse, CastMember, Movie, Shows } from "../types/CoreTypes";


export const useFetchMovieDetails = (movieId: string) => {
 const {data, loading, error, ErrorMsg} = useFetch <MovieDetail> (`{/movie/${movieId}`);
 return {movieDetails: data, loading, error, ErrorMsg};
};

export const useFetchShowDetails = (showId:string) =>{
    const{data, loading, error, ErrorMsg} = useFetch<ShowDetail> (`/tv/${showId}`);
    return {showDetails: data,loading,error, ErrorMsg};
};

export const useFetchMovieCredits = (movieId: string) => {
    const { data, loading, error, ErrorMsg } = useFetch<CreditsResponse>(`/movie/${movieId}/credits`);
    const cast: CastMember[] = data?.cast ? data.cast.slice(0, 10) : [];
    return { cast, loading, error, ErrorMsg }; 
};

export const useFetchShowCredits = (showId: string) =>{
    const{data,loading, error,ErrorMsg} = useFetch<CreditsResponse>(`/tv/${showId}/credits`);
    const cast: CastMember[] = data?.cast ? data.cast.slice(0,10) : [];
    return {cast, loading, error, ErrorMsg};
};

export const useFetchMovieRecommendations = (movieId: string) =>{
    const {data, loading, error, ErrorMsg} = useFetch <any> (`/movie/${movieId}/recommendations`);

    const recommendations: Movie [] = data?.results?data.results.map((movie:any) =>({
        id: movie.id,
        title: movie.title,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vote_average: movie.vote_average,
        details: movie.overview,
        })):[];

        return {recommendations, loading, error, ErrorMsg};
};

export const useFetchShowRecommendations = (showId: string) =>{
    const {data, loading, error, ErrorMsg} = useFetch <any> (`/tv/${showId}/recommendations`);

    const recommendations : Shows [] = data?.results?data.results.slice(0,6).map((show:any) => ({
        id: show.id,
        title: show.name,
        image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
        vote_average: show.vote_average,
        details: show.overview,
    })): [];

    return {recommendations, loading, error, ErrorMsg}

}