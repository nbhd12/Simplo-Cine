import Card from "../card/card";
import "./carousel.css"
import type { Movie } from "../../types/CoreTypes";

interface CarouselProps {
    movies: Movie[];
}



const CardCarousel = ( {movies}: CarouselProps) => {
    return (
        <div>
        <ul className="carousel">
            {movies.map((movie, index) => (
                <li key={`movie-list-item-${index}`}>
                    <Card
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