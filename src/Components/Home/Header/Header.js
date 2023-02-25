import { useContext } from "react";
import AuthContext from "../../../Utils/AuthContext";
import './Header.css';

const HeaderBar=()=>{
    const ctx=useContext(AuthContext);
    return(
        <nav className="navbar">
          <div className="navbar-brand">
            <a href="/">SP Transport</a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/about">About</a>
            </li>
            <li className="nav-item">
              <button onClick={ctx.onLogout}>Sign Out</button>
            </li>
          </ul>
        </nav>
       
    )
}
export default HeaderBar;