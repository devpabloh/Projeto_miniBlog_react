import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

// Hook

import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// Context

import { AuthProvider } from './context/AuthContext';

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Createpost from './pages/Createpost/Createpost';
import Dashboard from './pages/Dashboard/Dashboard';

/* Components */
import NavBar from "./components/NavBar"
import Footer from './components/Footer';


function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
     <AuthProvider value={{user}}>
     <BrowserRouter>
      <NavBar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/post/Createpost' element={<Createpost/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>  
     </AuthProvider>
    </div>
  );
}

export default App;
