import { useFetch } from "./useFetch";
import type { Shows } from "../types/CoreTypes";

interface TMDBShowResponse {
    page: number;
    results: any[];
    total_pages: number;
    total_results: number;
}

export const useFetchPopularShows = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/tv/popular");

    
    const shows: Shows[] = data?.results ? data.results.map((show: any) => ({
        id: show.id,
        title: show.name,
        image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
        vote_average: show.vote_average,
        details: show.overview,
    })) : [];

    return { shows, loading, error, ErrorMsg };
};