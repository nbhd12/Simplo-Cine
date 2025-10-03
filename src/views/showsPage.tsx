import CardCarousel from "../ui/carousel/carousel";
import { useFetchPopularShows } from "../hooks/SeriesHook"; 

import "./homePage.css";

const ShowsPage = () => {
    const { shows: popular, loading: loadingPopular, error: errorPopular } = useFetchPopularShows();
    
    if (loadingPopular)  {
        return <p>Loading...</p>;
    }

    if (errorPopular ) {
        return <p>Error loading shows</p>;
    }

    return (
        <div className="pageDisplay">
            <h2>Popular Shows</h2>
            <CardCarousel movies={popular} type="show" />

            {/* <h2>Top Rated Shows</h2>
            <CardCarousel movies={topRated} />

            <h2>Airing Today</h2>
            <CardCarousel movies={airingToday} />

            <h2>Currently On The Air</h2>
            <CardCarousel movies={onTheAir} /> */}
        </div>
    );
};

export default ShowsPage;