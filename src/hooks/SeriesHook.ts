import { useFetch } from "./useFetch";
import type { Shows } from "../types/CoreTypes";

interface TMDBShowResponse {
    page: number;
    results: any[];
    total_pages: number;
    total_results: number;
}

export const useFetchPopularShows = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/tv/popular?language=en-US");

    
    const shows: Shows[] = data?.results ? data.results.map((show: any) => ({
        id: show.id,
        title: show.name,
        image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
        vote_average: show.vote_average,
        details: show.overview,
    })) : [];

    return { shows, loading, error, ErrorMsg };
};


export const useFetchTopRated = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/tv/top_rated?language=en-US");

    
    const shows: Shows[] = data?.results ? data.results.map((show: any) => ({
        id: show.id,
        title: show.name,
        image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
        vote_average: show.vote_average,
        details: show.overview,
    })) : [];

    return { shows, loading, error, ErrorMsg };
};


export const useFetchOnTheAir = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/tv/on_the_air?language=en-US");

    
    const shows: Shows[] = data?.results ? data.results.map((show: any) => ({
        id: show.id,
        title: show.name,
        image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
        vote_average: show.vote_average,
        details: show.overview,
    })) : [];

    return { shows, loading, error, ErrorMsg };
};


export const useFetchAnimePopular = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/discover/tv?with_genres=16&sort_by=popularity.desc");

    
    const shows: Shows[] = data?.results ? data.results.map((show: any) => ({
        id: show.id,
        title: show.name,
        image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
        vote_average: show.vote_average,
        details: show.overview,
    })) : [];

    return { shows, loading, error, ErrorMsg };
};


export const useFetchTrendingThisYear = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/discover/tv?first_air_date_year=2025&sort_by=popularity.desc");

    
    const shows: Shows[] = data?.results ? data.results.map((show: any) => ({
        id: show.id,
        title: show.name,
        image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
        vote_average: show.vote_average,
        details: show.overview,
    })) : [];

    return { shows, loading, error, ErrorMsg };
};