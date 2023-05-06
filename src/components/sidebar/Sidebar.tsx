import React from 'react'
import "./_sidebar.scss"
import 
{ 
  MdSubscriptions, 
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome, 
  MdSentimentDissatisfied
} 
from 
'react-icons/md'
import { useDispatch } from 'react-redux'
import { setLogout } from '../../redux/slice/logoutSlice'
import { auth } from '../../firebase/firebase'
import {signOut } from "firebase/auth";

const Sidebar = ({sidebar, handleToggleSidebar}: any) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setLogout({
        name: "",
        email: "",
        photo: "",
        accessToken: ""
        
      }));
      
    }).catch((error) => {
      // An error happened.
      alert(error.message);
    });

    localStorage.removeItem("accessToken");
    localStorage.removeItem("user")
  }
  return (
    <nav className={sidebar ? "sidebar open" : "sidebar"}
    onClick={() => handleToggleSidebar(false)}
    >
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>

        <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>

        <li>
          <MdThumbUp size={23} />
          <span>Liked Videos</span>
        </li>

        <li>
          <MdHistory size={23} />
          <span>History</span>
        </li>

        <li>
          <MdLibraryBooks size={23} />
          <span>Library</span>
        </li>

        <li>
          <MdSentimentDissatisfied size={23} />
          <span>I don't know</span>
        </li>

        <hr />

        <li onClick={handleLogout}>
          <MdExitToApp size={23} />
          <span>Log Out</span>
        </li>

        <hr />

        
    </nav>
  )
}

export default Sidebar