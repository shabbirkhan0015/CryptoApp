import { Link } from "react-router-dom"

export default function RegisterSuccess(){
    return(
        <div className="emailcontainer">
        <div class="emailcard">
            <img src="Group.svg" alt="email icon"/>
            <h3>Successfully Registration</h3>
            <p>Hurray! You have successfully created your account. Enter the app to explore all it’s features.</p>
            <Link style={{width:"100%"}} to="/signin"><button style={{backgroundColor:"#5F00D9", color:"white"}}>Enter App</button></Link>
        </div>
    </div>
    )
}