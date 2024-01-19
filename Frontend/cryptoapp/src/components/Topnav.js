import './Topnav.css'
import {useState} from "react"
import { FaBars } from "react-icons/fa";
import useAuth from '../hooks/useAuth';
export default function Topnav({title}){
    const { logout } = useAuth();
    return(
        <div className="top-nav">
            <FaBars id="bar"/>
            <h1>{title}</h1>
            <div class="dropdown">
                <img  className="active" id="topimg" src="./profile.jpeg" alt="profile" />
                <div class="dropdown-content">
                    <button onClick={logout}>Logout</button>
                </div>
        </div>
        </div>
    )
}