import CardCarousel from "../ui/carousel/carousel";
import { useFetchPopularMovies } from "../hooks/UseFetchMovies";
import { useFetchUpcomingMovies } from "../hooks/UseFetchMovies";
import { useFetchBestRated } from "../hooks/UseFetchMovies";
import "./homePage.css";



const Homepage = () => {
  const { movies:popular,  loading:loadingPopular, error:errorPopular } = useFetchPopularMovies();
  const { movies:BestRated, loading: loadingBestRated, error: errorBestRated } = useFetchBestRated();
  const { movies:upcoming,  loading:loadingUpcoming, error:errorUpcoming } = useFetchUpcomingMovies();



  if (loadingPopular || loadingBestRated || loadingUpcoming ) return <p>Loading...</p>;
  if (errorPopular || errorBestRated || errorUpcoming) return <p>Error loading titles</p>;

  return (
    <div className="pageDisplay">
    <h2>Popular Movies</h2>
    <CardCarousel movies={popular} />;

    <h2>Best Rated Movies</h2>
    <CardCarousel movies={BestRated} />;

    <h2>Upcoming Movies</h2>
    <CardCarousel movies={upcoming} />;
    </div>
)
};


export default Homepage;