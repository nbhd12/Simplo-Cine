// import { useState, useEffect } from "react";
// import type { Movie } from "../types/CoreTypes";


// export const useFetchPopularMoviesOnly = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPopular = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const API_KEY = "d902f95efe24b57523639f92cf8e4558";
//         const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    

//         const response = await fetch(url);
//         if (!response.ok) throw new Error("Network error");

//         const data = await response.json();
//         console.log("API is sending data:", data);


//         const mappedMovies: Movie[] = data.results.map((movie: any) => ({
//           id: movie.id,
//           title: movie.title,
//           image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//           vote_average: movie.vote_average, 
//           details: movie.overview,
//         }));

//         setMovies(mappedMovies);
//       } catch (err) {
//         setError("Failed to fetch movies");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPopular();
//   }, []);

//   return { movies, loading, error };
// };




// export const useFetchUpcomingMovies = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUpcoming = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const API_KEY = "d902f95efe24b57523639f92cf8e4558";
        
//         const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

//         const response = await fetch(url);
//         if (!response.ok) throw new Error("Network error");

//         const data = await response.json();
//         console.log("API is sending data:", data);


//         const mappedMovies: Movie[] = data.results.map((movie: any) => ({
//           id: movie.id,
//           title: movie.title,
//           image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//           vote_average: movie.vote_average, 
//           details: movie.overview,
//         }));

//         setMovies(mappedMovies);
//       } catch (err) {
//         setError("Failed to fetch movies");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUpcoming();
//   }, []);

//   return { movies, loading, error };
// };



// export const useFetchBestRated = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchBestRated = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const API_KEY = "d902f95efe24b57523639f92cf8e4558";
        
//         const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

//         const response = await fetch(url);
//         if (!response.ok) throw new Error("Network error");

//         const data = await response.json();
//         console.log("API is sending data:", data);


//         const mappedMovies: Movie[] = data.results.map((movie: any) => ({
//           id: movie.id,
//           title: movie.title,
//           image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//           vote_average: movie.vote_average, 
//           details: movie.overview,
//         }));

//         setMovies(mappedMovies);
//       } catch (err) {
//         setError("Failed to fetch movies");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBestRated();
//   }, []);

//   return { movies, loading, error };
// };
