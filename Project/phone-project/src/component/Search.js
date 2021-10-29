import ProdectsOutput from './ProdectsOutput'
function Search({Products,inputValue}){
console.log("in sesre: "+inputValue);

return (
    <>
       {Products.map((element,index)=>{
           console.log(element.phone_name.substring(0,4)==inputValue);
          if(element.phone_name.substring(0,4)==inputValue){
             return <ProdectsOutput phone_name={element.phone_name} image={element.image} brand={element.brand}/>
   
          }})}
     </>
)
}
export default Search;
// {Products.map((element,index)=>{
//     if(element.phone_name===inputVal){
//        return (
//        <>
//        <p>yaaaaaas</p>
//        console.log("yaaaas");
//       </> )
//     }else 
//     return   <p>Nooooooooo</p>

//    })
//    }
   


