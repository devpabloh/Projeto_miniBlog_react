import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

import styles from "../components/NavBar.module.css";


const NavBar = () => {
  const {user} = useAuthValue();


  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
            mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li><NavLink to="/" className={({isActive})=> (isActive ? styles.active : "")}>Home</NavLink></li>
            {!user &&(
              <>
              <li><NavLink to="/login" className={({isActive}) =>(isActive ? styles.active: "")}>Entrar</NavLink></li>
              <li><NavLink to="/register" className={({isActive})=> (isActive ? styles.active : "")}>Cadastrar</NavLink></li>
              </>
            )}
            {user &&(
              <>
              <li><NavLink to="/post/Createpost" className={({isActive}) =>(isActive ? styles.active: "")}>Novo post</NavLink></li>
              <li><NavLink to="/dashboard" className={({isActive})=> (isActive ? styles.active : "")}>Dashboard</NavLink></li>
              </>
            )}
            <li><NavLink to="/about" className={({isActive})=> (isActive ? styles.active : "")}>Sobre</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar