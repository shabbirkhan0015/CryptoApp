import { Link } from "react-router-dom";

export default function ResetPasswordSuccess(){
    return(
        <div className="emailcontainer">
        <div class="emailcard" style={{width:"400px"}}>
            <img src="Check.svg" alt="Success icon"/>
            <h3>Password Reset Done</h3>
            <p>Now you can access you account. </p>
            <Link style={{width:"100%"}} to="/signin"><button style={{backgroundColor:"#5F00D9", color:"white"}}>Sign in</button></Link>
    </div>
</div>
    )
}