import "./card.css"

interface CardProps{
    title?: string;
    image?:string;
    vote_average?:number;
    details?: string;
}


const Card = ({title,image,vote_average,details}:CardProps) => {


    return(
        <div className="netflixCard">
            <img src={image} alt={`${title}-poster`} className="imageCard"/>
            <div className="details">
            <h3>{title}</h3>
            <p> Rating: {vote_average}</p>
            <p>{details}</p>
            </div>
        </div> 
    );
};


export default Card;