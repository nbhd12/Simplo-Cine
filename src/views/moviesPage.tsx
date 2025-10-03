import CardCarousel from "../ui/carousel/carousel";
import { useFetchPopularMoviesOnly } from "../hooks/UseFetchOnlyMovies";
import { useFetchUpcomingMovies } from "../hooks/UseFetchMovies";
import { useFetchBestRated } from "../hooks/UseFetchMovies";
import "./homePage.css";



const Moviepage = () => {
  const { movies:popular,  loading:loadingPopular, error:errorPopular } = useFetchPopularMoviesOnly();
  const { movies:BestRated, loading: loadingBestRated, error: errorBestRated } = useFetchBestRated();
  const { movies:upcoming,  loading:loadingUpcoming, error:errorUpcoming } = useFetchUpcomingMovies();



  if (loadingPopular || loadingBestRated || loadingUpcoming ) return <p>Loading...</p>;
  if (errorPopular || errorBestRated || errorUpcoming) return <p>Error loading titles</p>;

  return (
    <div className="pageDisplay">
    <h2>Popular Movies</h2>
    <CardCarousel movies={popular} type="movie" />;

    <h2>Best Rated Movies</h2>
    <CardCarousel movies={BestRated} type="movie"/>;

    <h2>Upcoming Movies</h2>
    <CardCarousel movies={upcoming} type="movie" />;
    </div>
)
};


export default Moviepage;