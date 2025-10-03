import { useParams } from "react-router-dom";
import { useFetchPersonDetails, useFetchPersonalCredit } from "../hooks/CastHook";
import CardCarousel from "../ui/carousel/carousel";
import type { Movie, Shows } from "../types/CoreTypes";
import "./castPage.css"

const CastPage = () => {
    
    const { id } = useParams<{ id: string }>();
    const { personDetails, loading: loadingPerson, error: errorPerson } = useFetchPersonDetails(id!);
    
    const { credits, loading: loadingCredits, error: errorCredits } = useFetchPersonalCredit(id!);


    const isLoading = loadingPerson || loadingCredits;
    const hasError = errorPerson || errorCredits;

    if (isLoading) return <div>Loading...</div>;
    if (hasError) return <div>Error...</div>;
    if (!personDetails) return <div>Actor not found</div>;


    const transformedCredits: (Movie | Shows)[] = credits.map(credit => ({
        id: credit.id,
        title: credit.title || credit.name || "Unknown",  
        image: credit.poster_path 
            ? `https://image.tmdb.org/t/p/w500${credit.poster_path}`  
            : 'https://placehold.co/500x750?text=No+Image',   
        vote_average: credit.vote_average || 0,
        details: credit.overview || "No description",
        media_type: credit.media_type,
        
    }));

    
    const imageUrl = personDetails.profile_path
        ? `https://image.tmdb.org/t/p/w300${personDetails.profile_path}`
        : 'https://placehold.co/300x450?text=No+Photo';
 
    return (
        <div className="castPage">
        
            <div className="castHeader">
                <img src={imageUrl} alt={personDetails.name} />
                <div className="castInfo">
                    <h1>{personDetails.name}</h1>
    
                    <p>Born: {personDetails.birthday}</p>
                    <p>{personDetails.biography}</p>
                </div>
            </div>

            <CardCarousel movies={transformedCredits} type="movie" />
        </div>
    );
};


export default CastPage;