import { NavLink } from "react-router";
import "./header.css"


export const Header = () => {
    return (
        
        <div className="header">
        
        <img src="/Netflix_Logo_RGB.png" alt="NetflixLogo" className="logo" />
        <ul>
            <li>  <NavLink to="/">Home</NavLink> </li>
            <li>  <NavLink to="/movies">Movies</NavLink></li>
            <li>  <NavLink to="/shows">Shows</NavLink></li>
        </ul>
</div>
    );
};