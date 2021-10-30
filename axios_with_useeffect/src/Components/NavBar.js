import './NavBar.css'


function NavBar()
{

    return  <div className="flex">
                <div className="logoIcon">
                    <picture>
                        <source media="(min-width:650px)" srcSet="newlogo.png" alt="mainLogo" width="170" height="100"/>
                        <img src="s-newlogo.png" alt="S-logo" width="50" height="50" />
                    </picture>
                </div>
                <div className="navigation">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#APIinfo">API info</a></li>
                        <li><a href="#watchlist">My Watchlist</a></li>
                    </ul>
                </div>
                <div className="loginIcon">
                    <button className="loginButton">Login</button>
                </div>
            </div>

}

export default NavBar;