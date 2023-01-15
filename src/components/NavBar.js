import './styles/NavBar.css'
import { Link } from 'react-router-dom'
const NAV_ITEMS = ['blogs', 'helps']

const NavBar = () => {
    return (
        <div className="nav-bar">
            {NAV_ITEMS.map((nav, i) => (
                <div id={i} className="nav-item">
                    <Link to={`/${nav}`}><p>{nav}</p></Link>
                </div>
            ))}
            <div className="nav-item">
                <Link to="/"><p>Home</p></Link>
            </div>
        </div>
    )
}

export default NavBar;