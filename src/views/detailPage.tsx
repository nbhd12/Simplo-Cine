import { useParams } from "react-router-dom";
import DetailBanner from "../ui/detailBanner/detailBanner";
import DetailInfo from "../ui/detailInfo/detailInfo";
import CastCard from "../ui/castCard/castCard";
import CardCarousel from "../ui/carousel/carousel";
import { useFetchMovieDetails, useFetchShowDetails, useFetchMovieRecommendations, useFetchShowRecommendations, useFetchMovieCredits, useFetchShowCredits } from "../hooks/DetailHook"; 
import type { CastMember } from "../types/CoreTypes";
import "./detailPage.css"


const DetailPage = () => {
    const {type,id} = useParams <{type: string, id: string}>();

     const isMovie = type === "movie";
    
    
    const { movieDetails, loading: loadingMovie } = useFetchMovieDetails(isMovie ? id! : "");
    const { showDetails, loading: loadingShow } = useFetchShowDetails(!isMovie ? id! : "");
    
    const { cast: movieCast, loading: loadingMovieCast } = useFetchMovieCredits(isMovie ? id! : "");
    const { cast: showCast, loading: loadingShowCast } = useFetchShowCredits(!isMovie ? id! : "");
    
    const { recommendations: movieRecs, loading: loadingMovieRecs } = useFetchMovieRecommendations(isMovie ? id! : "");
    const { recommendations: showRecs, loading: loadingShowRecs } = useFetchShowRecommendations(!isMovie ? id! : "");

    
    const loading = isMovie 
        ? (loadingMovie || loadingMovieCast || loadingMovieRecs)
        : (loadingShow || loadingShowCast || loadingShowRecs);

    if (loading) return <p>Loading...</p>;

    
    if (isMovie && movieDetails) {
        return (
            <div className="detail-page">
                <DetailBanner 
                    backdropPath={movieDetails.backdrop_path} 
                    title={movieDetails.title}  
                />

                <DetailInfo
                    title={movieDetails.title}  
                    overview={movieDetails.overview}
                    releaseDate={movieDetails.release_date}
                    voteAverage={movieDetails.vote_average}
                    genres={movieDetails.genres}
                    adult={movieDetails.adult}
                    runtime={movieDetails.runtime} 
                />

                <section className="cast-section">
                    <h2>Cast</h2>
                    <div className="cast-grid">
                        {movieCast.map((member:CastMember) => (
                            <CastCard
                                key={member.id}
                                id={member.id}
                                name={member.name}
                                character={member.character}
                                profileImage={member.profile_path}
                            />
                        ))}
                    </div>
                </section>

                <section className="recommendations-section">
                    <h2>More Like This</h2>
                    <CardCarousel movies={movieRecs} type="movie" />
                </section>
            </div>
        );
    }

    
    if (!isMovie && showDetails) {
        return (
            <div className="detail-page">
                <DetailBanner 
                    backdropPath={showDetails.backdrop_path} 
                    title={showDetails.name}  
                />

                <DetailInfo
                    title={showDetails.name}  
                    overview={showDetails.overview}
                    releaseDate={showDetails.first_air_date}
                    voteAverage={showDetails.vote_average}
                    genres={showDetails.genres}
                    adult={showDetails.adult}
                    numberOfEpisodes={showDetails.number_of_episodes}  
                    numberOfSeasons={showDetails.number_of_seasons}   

                />

                <section className="cast-section">
                    <h2>Cast</h2>
                    <div className="cast-grid">
                        {showCast.map((member:CastMember) => (
                            <CastCard
                                key={member.id}
                                id={member.id}
                                name={member.name}
                                character={member.character}
                                profileImage={member.profile_path}
                            />
                        ))}
                    </div>
                </section>

                <section className="recommendations-section">
                    <h2>More Like This</h2>
                    <CardCarousel movies={showRecs} type="show"/>
                </section>
            </div>
        );
    }

    return <p>Content not found</p>;
};

export default DetailPage;
