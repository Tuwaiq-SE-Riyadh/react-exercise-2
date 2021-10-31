import Card from './Card'
function List({ page,setPage}){
console.log(setPage);
    return(
        <div  id= "meal">
{page.map((e,index)=>{
 return(
    <div class = "meal-item" > 
       <Card
       id={ e.idMeal}
       img={e.strMealThumb}
       p={e.strMeal}
       /> 

    </div>
 )

})}
        </div>
    )
}
export default List;