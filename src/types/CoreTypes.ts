export interface Item {
title: string;
description: string;
}


export interface Movie{
    id: number;
    title: string;
    image: string;
    vote_average: number;
    details: string;
    
}

export interface Shows {
    id: number;
    title: string;
    image: string;
    vote_average: number;
    details: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface CastMember {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
    order: number;
}

export interface ProductionCompany{
    id: number;
    name: string;
    logo_path: string | null;
}

export interface MovieDetail {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
    vote_average: number;
    release_date: string;
    runtime: number;
    genres: Genre [];
    adult: boolean;
    production_companies: ProductionCompany [];
}

export interface ShowDetail {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    first_air_date: string;
    number_of_episodes: number;
    number_of_seasons: number;
    episode_run_time: number[];
    genres: Genre[];
    adult: boolean;
    production_companies: ProductionCompany[];
}

export interface Recommendations{
    results: Movie [] | Shows [];
    total_pages: number;
    total_results: number;
}

export interface CreditsResponse {
    id: number;
    cast: CastMember[];
    crew: any[]; 
}

export interface PersonDetail{
    id: number;
    name: string;
    biography: string;
    birthday?: string;
    deathday?:string;
    place_of_birth?: string;
    profile_path?:string, 
    gender?: number;
}

export interface PersonCredit {
    id:number;
    title?: string;
    name?:string;
    media_type: "movie" | "tv";
    poster_path?: string;
    vote_average?: number;
    overview: string;
}