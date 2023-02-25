import './VerticalNavbar.css'
const VerticalNavbar=(props)=>{
  let name;
  const navbarChangeHandler=(event)=>{
    name=event.target.name;
    props.navItem(name);
  }
    return(
        <aside className="sidebar">
          <ul className="sidebar-nav">
            <li className="sidebar-items">
              <button className="sidebar-button" onClick={navbarChangeHandler} name="Dashboard">Dashboard</button>
            </li>
            <li className="sidebar-items">
              <button className="sidebar-button" onClick={navbarChangeHandler} name="RateChart">Rate Chart</button>
            </li>
            <li className="sidebar-items">
              <button className="sidebar-button" onClick={navbarChangeHandler} name="Plant">Plant</button>
            </li>
          </ul>
        </aside>
    )
}
export default VerticalNavbar;