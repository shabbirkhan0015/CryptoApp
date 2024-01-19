import './Signin.css'
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { signinUser } from '../../../api/query/userQuery';
import useAuth from "../../../hooks/useAuth"

export default function Signin(){

    const {login}= useAuth();
    const [error, setError] = useState(null);
    const [user, setUser] = useState({
       
        email: '',
        password: '',
      });

      const handleSubmit = async (e) => {
        e.preventDefault(); 
      
        try {

          const response = await signinUser(user.email, user.password);
          if(response === "Credentials Invalid !!")
          {
            setError(response);
          }
          else{
            setError(null)
            if(response.jwtToken)
            {
              const token = response.jwtToken;
              login(token)
            }

          }
        } catch (error) {
          const errorMessage = error.error.response?.data || 'Unknown error';
         
          setError(errorMessage);
         
        }
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };
   
    return(
        <div className='containerforcenter'>
            <div className="signup-container">
                <h1>Welcome to Crypto App</h1>
                <p>Enter your credentials to access the account.</p>
                <form className='signupform' onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email.."
                            required
                            value={user.email}
                            onChange={handleChange}
                            />
                </div>
                    <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                required
                                name="password"
                                placeholder="Password.."
                                value={user.password}
                                onChange={handleChange}
                                />
                     </div>
                  
                    <div className='checkboxdiv'>
                            <div>
                            <input type='checkbox' />
                            <span className='checkbox-label'>Remember me</span></div>
                            <div>
                                <Link to='/forgot-password'><span>Forgot Password</span></Link>
                            </div>
                    </div>
                    <button type="submit" className='loginbtn'>Login</button>
                   
                   
                </form>
               <Link to="/signup"> <button className='createaccontbtn1 create'>Create Account</button></Link>
               {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
                   
        </div> 
    )
}