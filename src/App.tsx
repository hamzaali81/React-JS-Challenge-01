import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import "./_app.scss";
// 1:07:43

const Layout = ({children}: any) => {
  const [sidebar, toggleSidebar] = useState(false);
  const {accessToken} = useSelector((state: any): any => state.users.users);
  // console.log(state);
  const navigate = useNavigate();
  // const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if(!accessToken){
      navigate("/auth");
    }
  }, [accessToken, navigate])


  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return(
  <>
   <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
        <Container fluid className="app__main border border-warning">
          {/* <HomeScreen /> */}
          {children}
        </Container>
          </div> 
  </>
  )
}

function App() {
  
  return (
    <Routes>
      {/* <Layout>
          <LoginScreen />
      </Layout> */}
      <Route path="/" element={(<Layout><HomeScreen/></Layout>)}>
        <Route index element={<HomeScreen />} />
      </Route>

      <Route path="/auth" element={<LoginScreen />} />
       <Route path='/search' element={(<Layout><h1>Search Result</h1></Layout>)}>
            <Route index element={<h1>Search Result</h1>} />       
        </Route>
         
    </Routes>
  );
}

export default App;
