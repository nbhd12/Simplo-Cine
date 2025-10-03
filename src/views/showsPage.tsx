import CardCarousel from "../ui/carousel/carousel";
import { useFetchPopularShows, useFetchTopRated, useFetchOnTheAir, useFetchAnimePopular, useFetchTrendingThisYear } from "../hooks/SeriesHook"; 
import "./homePage.css";

const ShowsPage = () => {
    const { shows: popular, loading: loadingPopular, error: errorPopular } = useFetchPopularShows() ;
    const { shows:topRated, loading: loadingTopRated, error:errorTopRated} = useFetchTopRated();
    const { shows:onTheAir, loading: loadingonTheAir, error:erroronTheAir} = useFetchOnTheAir();
    const { shows:animePopular, loading: loadinganimePopular, error:erroranimePopular} = useFetchAnimePopular();
    const { shows:thisYear, loading: loadingthisYear, error:errorthisYear} = useFetchTrendingThisYear();



    if (loadingPopular || loadingTopRated || loadingonTheAir || loadinganimePopular || loadingthisYear)  {
        return <p>Loading...</p>;
    }

    if (errorPopular || errorTopRated || erroronTheAir || erroranimePopular || errorthisYear) {
        return <p>Error loading shows</p>;
    }

    return (
        <div className="pageDisplay">
            <h2>Popular Shows</h2>
            <CardCarousel movies={popular} type="show" />

            <h2>Top Rated Shows</h2>
            <CardCarousel movies={topRated} type="show" />
            
            <h2>Animation Popular Shows</h2>
            <CardCarousel movies={animePopular} type="show" />

             <h2>Trending This Year</h2>
            <CardCarousel movies={thisYear} type="show" />

            <h2>On the Air</h2>
            <CardCarousel movies={onTheAir} type="show"/>
           
        </div>
    );
};

export default ShowsPage;