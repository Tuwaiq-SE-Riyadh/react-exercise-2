function Show({title,categoryg,Instructions,img,link}){
    return(
        <div class="meal-details-content">
 <h2 class = "recipe-title">{title}</h2>
 <p class = "recipe-category">{categoryg}</p>

 <div class = "recipe-instruct">
        <h3>Instructions:</h3>
        <p>{Instructions}</p>
    </div>
    <div class = "recipe-meal-img">
        <img src = { img} alt = ""/>
    </div>
    <div class = "recipe-link">
        <a href = {link} target = "_blank">Watch Video</a>
    </div>
        </div>
    )
}
export default Show;