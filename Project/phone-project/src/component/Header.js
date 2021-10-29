import logo from './logo.jpg'
function Header(){
return(
<header className="container">
    <img className="logo" src={logo} alt="" />
    <h1 className="header1">Welcome to Samart Technology site</h1>
</header>
)
}
export default Header;