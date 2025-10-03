import Card from "../card/card";
import "./carousel.css"
import type { Movie } from "../../types/CoreTypes";
import type { Shows } from "../../types/CoreTypes";

interface CarouselProps {
    movies: Movie[] | Shows[];
    type: "movie"| "show";
}



const CardCarousel = ( {movies,type}: CarouselProps) => {
    return (
        <div>
        <ul className="carousel">
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Card
                    id={movie.id}
                    type={type}
                    title= {movie.title}
                    image={movie.image}
                    vote_average={movie.vote_average}
                    details={movie.details} />
                </li>
            )
            )}

        </ul> 
        </div>
    )
}


export default CardCarousel;