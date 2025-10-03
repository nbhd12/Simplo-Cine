import CardCarousel from "../ui/carousel/carousel";
import { useFetchTopRated, useFetchAnimePopular } from "../hooks/SeriesHook"; 
import { useFetchMarvel, useFetchDC } from "../hooks/MovieHook";
import "./homePage.css";



const Homepage = () => {
  const { shows:topRated, loading: loadingTopRated, error:errorTopRated} = useFetchTopRated();
  const { shows:animePopular, loading: loadinganimePopular, error:erroranimePopular} = useFetchAnimePopular();
  const { movies:marvel,  loading:loadingmarvel, error:errormarvel } = useFetchMarvel();
  const { movies:dc,  loading:loadingdc, error:errordc } = useFetchDC();
 

  if (loadingTopRated || loadinganimePopular || loadingmarvel || loadingdc ) return <p>Loading...</p>;
  if (errorTopRated || erroranimePopular || errormarvel || errordc) return <p>Error loading titles</p>;

  return (
    <div className="pageDisplay">
    <h2>Top Rated Shows</h2>
    <CardCarousel movies={topRated} type="show" />;

    <h2>The Marvel Series</h2>
    <CardCarousel movies={marvel} type="movie" />;

    <h2>Anime Popular Shows</h2>
    <CardCarousel movies={animePopular} type="show" />;

    <h2>DC Universe Movies</h2>
    <CardCarousel movies={dc}  type="movie"/>;
    </div>
)
};


export default Homepage;