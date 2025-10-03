import "./card.css";
import { Link } from "react-router";

interface CardProps {
  id: number,
  type: "movie" | "show",
  title?: string;
  image?: string;
  vote_average?: number;
  details?: string;
}

const Card = ({ id, type, title, image, vote_average, details }: CardProps) => {
  return (
    <Link to={`/${type}/${id}`} className="netflixCard">
      <img src={image} alt={`${title}-poster`} className="imageCard" />
      <div className="details">
        <h3>{title}</h3>
        <p> Rating: {vote_average}</p>
      </div>
    </Link>
  );
};

export default Card;
