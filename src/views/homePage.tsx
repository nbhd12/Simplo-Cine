import { useFetchPopularMovies } from "../hooks/UseFetchMovies";
import CardCarousel from "../ui/carousel/carousel";




const Homepage = () => {
  const { movies, loading, error } = useFetchPopularMovies();


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <CardCarousel movies={movies} />;
};


export default Homepage;