import { useFetch } from "./useFetch";
import type { Movie } from "../types/CoreTypes";

interface TMDBShowResponse {
    page: number;
    results: any[];
    total_pages: number;
    total_results: number;
}

export const useFetchNowPlaying = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/movie/upcoming");

    
    const movies: Movie[] = data?.results ? data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vote_average: movie.vote_average,
        details: movie.overview,
    })) : [];

    return { movies, loading, error, ErrorMsg };
};



export const useFetchTopRated = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/movie/top_rated");

    
    const movies: Movie[] = data?.results ? data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vote_average: movie.vote_average,
        details: movie.overview,
    })) : [];

    return { movies, loading, error, ErrorMsg };
};



export const useFetchPopular = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/movie/popular");

    
    const movies: Movie[] = data?.results ? data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vote_average: movie.vote_average,
        details: movie.overview,
    })) : [];

    return { movies, loading, error, ErrorMsg };
};


export const useFetchMarvel = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/discover/movie?with_companies=420&sort_by=vote_average.desc&vote_count.gte=200");

    
    const movies: Movie[] = data?.results ? data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vote_average: movie.vote_average,
        details: movie.overview,
    })) : [];

    return { movies, loading, error, ErrorMsg };
};


export const useFetchDocumentary = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/discover/movie?with_genres=99&primary_release_date.gte=2020-01-01&sort_by=popularity.desc");

    
    const movies: Movie[] = data?.results ? data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vote_average: movie.vote_average,
        details: movie.overview,
    })) : [];

    return { movies, loading, error, ErrorMsg };
};



export const useFetchDC = () => {
    const { data, loading, error, ErrorMsg } = useFetch<TMDBShowResponse>("/discover/movie?with_companies=429&sort_by=popularity.desc");

    
    const movies: Movie[] = data?.results ? data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        vote_average: movie.vote_average,
        details: movie.overview,
    })) : [];

    return { movies, loading, error, ErrorMsg };
};


