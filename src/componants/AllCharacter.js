import Character from "./Character";
import './compo.css';
function AllCharacter({data}){
return(
    <div id="allch">{data.map((ele,index)=><Character ele={ele} key={index}/>)}</div>   
);
}

export default AllCharacter;