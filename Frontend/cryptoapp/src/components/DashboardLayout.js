
import './DashboardLayout.css'
import Sidenav from './Sidenav.js'
import Topnav from "./Topnav.js";

export default function DashboardLayout({title, children}){
    return(
       
            <div className="nav-dashboard">
                <Sidenav className="sidenav" />
                <div className="topchild">
                <Topnav  title={title} />
                {children}
                </div>
            </div>
    )
}