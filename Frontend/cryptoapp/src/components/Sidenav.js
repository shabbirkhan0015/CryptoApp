import './Sidenav.css'
import { Link, useLocation } from "react-router-dom";

export default function Sidenav(){
        const location = useLocation();

    const isActiveLink = (link) => {
        return location.pathname === link;
    };
    const navLinks = [
        {
          
          text: "Dashboard",
          link: "/",
        },
        {
          text: "Transactions",
          link: "/transactions",
        },
      ];

    return (
        <div className="nav-container"> 
            <div className="top-container">
                <h1 className="dotrading">@DOTRADING</h1>
                <div className="button-container">  
                {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
                <div className='buttons'>{nav.text}</div>
            </Link>
          ))}
               
                </div>
            </div>
            <div className="support-container">
            <Link to="/support">
                    <div className="buttons">Support</div>
                    </Link>
            </div>
        </div>
    )
}