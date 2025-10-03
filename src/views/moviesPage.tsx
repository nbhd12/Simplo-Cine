import CardCarousel from "../ui/carousel/carousel";
import { useFetchNowPlaying, useFetchTopRated, useFetchPopular, useFetchMarvel, useFetchDocumentary } from "../hooks/MovieHook";
import "./homePage.css";



const Moviepage = () => {
  const { movies:nowPlaying,  loading:loadingnowPlaying, error:errornowPlaying } = useFetchNowPlaying();
  const { movies:topRated,  loading:loadingtopRated, error:errortopRated } = useFetchTopRated();
  const { movies:popular,  loading:loadingpopular, error:errorpopular } = useFetchPopular();
  const { movies:marvel,  loading:loadingmarvel, error:errormarvel } = useFetchMarvel();
  const { movies:documentary,  loading:loadingdocumentary, error:errordocumentary } = useFetchDocumentary();

  if ( loadingnowPlaying || loadingtopRated || loadingpopular || loadingmarvel || loadingdocumentary) return <p>Loading...</p>;
  if ( errornowPlaying || errortopRated || errorpopular || errormarvel || errordocumentary) return <p>Error loading titles</p>;

  return (
    < div className="pageDisplay">
    
    <h2>Movies Now Playing</h2>
    <CardCarousel movies={nowPlaying} type="movie" />;

    <h2>Best Rated Movies</h2>
    <CardCarousel movies={topRated} type="movie"/>;

    <h2>Popular Movies</h2>
    <CardCarousel movies={popular} type="movie" />;

    <h2>Marvel Movies</h2>
    <CardCarousel movies={marvel} type="movie" />;

    <h2>Documentary Movies</h2>
    <CardCarousel movies={documentary} type="movie" />;
    </div>
)
};


export default Moviepage;