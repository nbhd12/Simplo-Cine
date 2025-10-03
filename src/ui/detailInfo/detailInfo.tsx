import type { Genre } from "../../types/CoreTypes";
import "./detailInfo.css";

interface DetailInfoProps {
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  genres: Genre[];
  adult: boolean;

  runtime?: number;
  numberOfEpisodes?: number;
  numberOfSeasons?: number;
}

const DetailInfo = ({
  title,
  overview,
  releaseDate,
  voteAverage,
  genres,
  adult,
  numberOfSeasons,
  numberOfEpisodes,
}: DetailInfoProps) => {
  const year = new Date(releaseDate).getFullYear();
  const parentalRating = adult ? "18+" : "PG-13";

  return (
    <div className="detailInfo">
      <h1 className="detail-title"> {title}</h1>
      <div className="detailMeta">
        <span className="metaItem">{year}</span>
        <span className="metaItem">{parentalRating}</span>
        <span className="metaItem">
          {numberOfSeasons}Season{numberOfSeasons > 1 ? "s" : ""}
        </span>
        <span className="metaItem">{numberOfEpisodes} Episodes</span>
        <span className="metaItem rating">{voteAverage}</span>
      </div>
      <div className="detailGenres"> 
        {genres.map((genre) => ( 
          <span key={genre.id} className="genre-tag">
            {genre.name}
          </span>
        ))}
      </div>
      <p className="detail-overview">{overview}</p>
    </div>
  );
};

export default DetailInfo;
