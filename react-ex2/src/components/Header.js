import image from '../header.jpg'

function Header() {

    const displayicon = ()=>{
        const filterbar = document.querySelector("#myLinks")
        if(filterbar.style.display === "block"){
            filterbar.style.display = "none";
        } else {
            filterbar.style.display = "block";
        }
    }
    
    return(
        <>
        <div className="header">
        <div>
            <a href="/index.html" className="logo">Video Games</a>
        </div>
        <div className="mobilelist">
            <a className="icon" onClick={displayicon}>
                <i className="fa fa-bars"></i></a>
        </div>
        </div>

    <div className="wallpaper">
        <img src={image} width="100%" alt=""/>
    </div>

        <div id="myLinks" class="form-2">
            <h3>Genre</h3>  
                <label><input type="radio" name="Genre" value="MMO"/>All</label> 
                <label><input type="radio" name="Genre" value="MMO"/>MMO</label> 
                <label><input type="radio" name="Genre" value="MMORPG"/>MMORPG</label> 
                <label><input type="radio" name="Genre" value="Shooter"/>Shooter</label>
                <label><input type="radio" name="Genre" value="Strategy"/>Strategy</label>
                <label><input type="radio" name="Genre" value="Moba"/>Moba</label>
                <label><input type="radio" name="Genre" value="Battle Royale"/>Battle Royale</label> 
                <label><input type="radio" name="Genre" value="Card"/>Card</label> 
                <label><input type="radio" name="Genre" value="Racing"/>Racing</label>
                <label><input type="radio" name="Genre" value="Sports"/>Sports</label> 
                <label><input type="radio" name="Genre" value="Social"/>Social</label> 
                <label><input type="radio" name="Genre" value="Fighting"/>Fighting</label>
        </div>
        </>
    )
}

export default Header;