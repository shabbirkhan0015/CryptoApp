import { useState } from "react";
import './ResetPassword.css'
import { useParams, Link } from "react-router-dom";
import { sendForgot } from "../../../api/query/userQuery";


export default function ResetPassword(){
    
    const {email} =useParams();
    const [error ,setError] = useState(null);
    const [user, setUser] = useState({
        email:'',
        password: '',
      });
      const handleSubmit = async (e) => {
        
        e.preventDefault();
  
        user.email=email;
        try{
          const response = await sendForgot(user.password, user.email)
          setError(response);
        }
       
        catch(error)
        {
            const errorMessage = error.error.response?.data || 'Unknown error';
            console.log(errorMessage)
            setError(error)
        }
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };

    return (
        <div className="resetpasswordcontainer">
            <div className='passwordcontainer' style={{width:"400px"}}>
                <div className="forgotpasswordheading">
                <Link to="/forgot-password"><img src="leftarrow.svg" alt="left Arrow" /></Link>
                    <h1>Reset Password</h1>
                    <p>Enter your new password.</p>
                </div>
                <form className='emailformcontainer' onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="email">Password</label>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                placeholder="password.."
                                required
                                value={user.password}
                                onChange={handleChange}
                                />
                        </div>
                        <button type="submit" className='loginbtn'>Reset Password</button>
                        <Link style={{width:"100%"}} to="/signin"><button style={{backgroundColor:"#5F00D9", color:"white"}}>Enter App</button></Link>
                </form>
               
                {error && <div style={{ color: 'red' }}>{error}</div>}      
            </div>
        </div>
    )
}