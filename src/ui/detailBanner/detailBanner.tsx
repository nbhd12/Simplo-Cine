import "./detailBanner.css"

interface DetailBannerProps{
    backdropPath: string;
    title: string;
}

const DetailBanner = ({title, backdropPath}: DetailBannerProps) => {
    const imageUrl = `https://image.tmdb.org/t/p/original${backdropPath}`;
    return(
        <div className="detailBanner" style={{ backgroundImage: `url(${imageUrl})` }}>
            
            <div className="titleDisplay">{title}
                <h3> ▶</h3>
                <button className="playNow">Play Now</button>
                </div>
            
        </div>
    )
}



export default DetailBanner;