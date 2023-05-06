import React from 'react'
import "./_loginScreen.scss";
import { useDispatch } from 'react-redux';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setLogin } from '../../redux/slice/loginSlice';
import { auth } from '../../firebase/firebase';
import { useNavigate } from "react-router-dom";


const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result: any) => {
        console.log(result);
        const user = result.user;
        const accessToken = result.user.accessToken;
        
        dispatch(setLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          accessToken: accessToken
        }))
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");

      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }



  return (
    <div className='login'>
       <div className='login__container'>
           <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" 
           alt="" 
           />
              <button onClick={handleLogin}>Login with Google</button>
                <p>
                    This project is made for educational purpose only.
                </p>
       </div>
    </div>
  )
}

export default LoginScreen