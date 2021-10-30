function ComedyShow ({allList}){

    return (
        <div className="items">
        {allList.map((element, index) => {
                 return  <div className="item">
               <h2 className="cardName">{element.name}</h2>
               <img width="200" height="300" src={element.image.medium} alt="item" />
               <p>{" "+element.genres}</p>
          </div>
      
           
      })}
        </div>
    )
}
export default ComedyShow;