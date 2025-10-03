import "./castCard.css";
import { Link } from "react-router";

interface CastCardProps {
  id: number,
  name: string;
  character: string;
  profileImage: string | null;
}

const CastCard = ({ id, name, character, profileImage }: CastCardProps) => {
  const imageUrl = profileImage
    ? `https://image.tmdb.org/t/p/w200${profileImage}`
    : "https://via.placeholder.com/200x300?text=No+Image";
  return (
    <Link to = {`/person/${id}`} className="castCard">
      <img src={imageUrl} alt={name} className="castImage" />
      <div className="castInfo">
        <h4 className="castName"> {name}</h4>
        <p className="character">{character}</p>
      </div>
    </Link>
  );
};

export default CastCard;
