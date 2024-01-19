import Sidenav from "./Sidenav";

export default function SideDrawer({ isOpen, onClose }){
    return(
        <div sOpen={isOpen} placement="left" onClose={onClose}>
            <Sidenav/>
        </div>
    )
}